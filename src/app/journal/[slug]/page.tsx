import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "@/lib/journal";
import PageHero from "@/components/PageHero";
import ArticleTOC from "@/components/ArticleTOC";
import Link from "next/link";

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

// Überschriften aus MDX-Content extrahieren
function extractHeadings(content: string) {
  const matches = [...content.matchAll(/^## (.+)$/gm)];
  return matches.map((match, i) => {
    const text = match[1];
    const id = text
      .toLowerCase()
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/ß/g, "ss")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return { number: String(i + 1).padStart(2, "0"), text, id };
  });
}

// Bild-Platzhalter für MDX
const ImagePlaceholder = () => (
  <div className="not-prose w-full h-[420px] bg-sage/15 my-12" />
);

// h2 mit automatischer ID + scroll-margin für die fixe Navbar
const H2 = ({ children, ...props }: { children: React.ReactNode }) => {
  const id = String(children)
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return (
    <h2 id={id} style={{ scrollMarginTop: "7rem" }} {...(props as object)}>
      {children}
    </h2>
  );
};

const components = { ImagePlaceholder, h2: H2 };

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const headings = extractHeadings(article.content);
  const formattedDate = new Date(article.date).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <PageHero label={article.category} title={article.title} />

      <article className="px-8 md:px-24 py-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">

          {/* ── Links: Inhaltsverzeichnis (Client-Component mit aktiver Section) ── */}
          <aside className="md:col-span-3">
            <ArticleTOC
              headings={headings}
              readingTime={article.readingTime}
              category={article.category}
              date={formattedDate}
            />
          </aside>

          {/* ── Rechts: Artikel-Content ── */}
          <div className="md:col-span-9">
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-serif prose-headings:font-normal prose-headings:text-text
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-5
                prose-p:font-sans prose-p:text-text/60 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-text prose-strong:font-medium
                prose-em:italic prose-em:text-sage
                prose-ul:font-sans prose-ul:text-text/60 prose-li:leading-relaxed
              "
            >
              <MDXRemote source={article.content} components={components} />
            </div>

            <div className="mt-20 pt-8 border-t border-text/10">
              <Link
                href="/journal"
                className="font-sans text-xs tracking-widest uppercase text-sage hover:text-text transition-colors duration-300"
              >
                ← Zurück zum Journal
              </Link>
            </div>
          </div>

        </div>
      </article>
    </>
  );
}
