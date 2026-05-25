import PageHero from "@/components/PageHero";
import JournalList from "@/components/JournalList";
import { getAllArticles } from "@/lib/journal";

export default function Journal() {
  const articles = getAllArticles();

  return (
    <>
      <PageHero label="Gedanken & Tipps" title="Journal" />

      <section className="px-8 md:px-24 py-24">
        <JournalList articles={articles} />
      </section>
    </>
  );
}
