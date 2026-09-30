import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate Limiting: max 5 Anfragen pro IP in 10 Minuten
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS = 5;
const WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_REQUESTS) return false;
  entry.count++;
  return true;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte warte ein paar Minuten." },
      { status: 429 }
    );
  }

  const { name, email, phone, service, message, website } = await req.json();

  // Honeypot: Bots füllen dieses Feld aus, echte Nutzer nicht
  if (website) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Bitte alle Pflichtfelder ausfüllen." },
      { status: 400 }
    );
  }

  // Input-Längen begrenzen
  if (
    name.length > 100 ||
    email.length > 200 ||
    (phone && phone.length > 50) ||
    (service && service.length > 100) ||
    message.length > 2000
  ) {
    return NextResponse.json(
      { error: "Eingabe zu lang." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "Kontaktformular <onboarding@resend.dev>",
      to: "dreadlockatelier@web.de",
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone || "–"}\nAnliegen: ${service || "–"}\n\nNachricht:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}
