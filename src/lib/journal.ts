import fs from "fs";
import path from "path";
import matter from "gray-matter";

const journalDir = path.join(process.cwd(), "content/journal");

export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readingTime: number;
}

function calcReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

export interface ArticleWithContent extends Article {
  content: string;
}

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(journalDir);

  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(journalDir, filename), "utf-8");

      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt,
        readingTime: calcReadingTime(content),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): ArticleWithContent {
  const raw = fs.readFileSync(path.join(journalDir, `${slug}.mdx`), "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    excerpt: data.excerpt,
    readingTime: calcReadingTime(content),
    content,
  };
}
