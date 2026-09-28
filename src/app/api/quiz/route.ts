import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  api: { bodyParser: false },
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const profile = formData.get("profile") as string;
    const files = formData.getAll("photos") as File[];

    if (!name || !email) {
      return NextResponse.json({ error: "Name und E-Mail sind erforderlich." }, { status: 400 });
    }

    const attachments = await Promise.all(
      files
        .filter((f) => f.size > 0)
        .slice(0, 5)
        .map(async (file) => {
          const buffer = await file.arrayBuffer();
          return {
            filename: file.name,
            content: Buffer.from(buffer).toString("base64"),
          };
        })
    );

    await resend.emails.send({
      from: "quiz@dreadlockatelier.de",
      to: "kimbaerlyyo@web.de",
      replyTo: email,
      subject: `Quiz-Anfrage von ${name}`,
      text: `Neue Beratungsanfrage über das Quiz.\n\nName: ${name}\nE-Mail: ${email}\n\n--- Dread-Profil ---\n${profile}\n\n${attachments.length} Foto(s) im Anhang.`,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Fehler beim Senden." }, { status: 500 });
  }
}
