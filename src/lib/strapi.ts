import { marked } from "marked";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:1337";
console.log(API_URL);
// ─── Types ────────────────────────────────────────────────────────────────────

export interface StrapiCover {
  id: number;
  documentId: string;
  url: string;
  alternativeText?: string;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
    thumbnail?: { url: string };
  };
}

export interface StrapiRichTextBlock {
  __component: "shared.rich-text";
  id: number;
  body: string; // Markdown string
}

export interface StrapiMediaBlock {
  __component: "shared.media";
  id: number;
  file?: StrapiCover;
}

export interface StrapiQuoteBlock {
  __component: "shared.quote";
  id: number;
  title?: string;
  body?: string;
}

export type StrapiBlock =
  | StrapiRichTextBlock
  | StrapiMediaBlock
  | StrapiQuoteBlock;

export interface StrapiArticle {
  id: number;
  documentId: string;
  title: string;
  description?: string;
  slug?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  cover?: StrapiCover;
  blocks?: StrapiBlock[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Prefer medium format for cards, fall back to original URL. */
export function getCoverUrl(cover?: StrapiCover): string {
  if (!cover) return "";
  return cover.formats?.medium?.url ?? cover.formats?.small?.url ?? cover.url;
}

/** Format a Strapi ISO date string to a localised display string. */
export function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("sl-SI", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Render a Strapi blocks array to an HTML string.
 * Only `shared.rich-text` blocks are rendered; other types are skipped.
 */
export function renderBlocksToHtml(blocks?: StrapiBlock[]): string {
  if (!blocks || blocks.length === 0) return "";
  return blocks
    .filter(
      (b): b is StrapiRichTextBlock => b.__component === "shared.rich-text",
    )
    .map((b) => marked.parse(b.body ?? "") as string)
    .join("\n");
}

// ─── API calls ────────────────────────────────────────────────────────────────

export async function fetchArticles(): Promise<StrapiArticle[]> {
  const res = await fetch(
    `${API_URL}/api/articles?populate=*&sort=publishedAt:desc`,
  );
  if (!res.ok) throw new Error(`Strapi error ${res.status}`);
  const json = await res.json();
  return (json.data as StrapiArticle[]) ?? [];
}

export async function fetchArticle(documentId: string): Promise<StrapiArticle> {
  const res = await fetch(`${API_URL}/api/articles/${documentId}?populate=*`);
  if (!res.ok) throw new Error(`Strapi error ${res.status}`);
  const json = await res.json();
  return json.data as StrapiArticle;
}
