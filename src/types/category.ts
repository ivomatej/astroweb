/**
 * Accent color scheme used to tint category cards.
 * Maps to design tokens defined in tokens.css.
 */
export type CategoryAccent =
  | "purple"
  | "amber"
  | "green"
  | "red"
  | "blue";

export interface Category {
  slug: string;
  name: string;
  href: string;

  /** Short tagline shown under the name on category cards. */
  tagline: string;

  /** Longer description, 1-2 sentences. Used on featured/large cards. */
  description: string;

  /** Total number of articles in this category. */
  articleCount: number;

  /** Number of articles published in the last 90 days. Optional. */
  freshCount?: number;

  /** Up to ~5 subtopics shown as chips inside the card. */
  topics: string[];

  /** Color accent applied to the card. */
  accent: CategoryAccent;

  /** If true, this category is rendered as the large featured card. */
  featured?: boolean;

  /** Optional hero image path for the featured card. */
  heroImageSrc?: string;

  /**
   * Editor's note on the category page — short (~80–130 words), distinct, human voice.
   * Explains the redakce angle on this category: what we test, what to ignore.
   *
   * IMPORTANT: NEVER pad category pages with 600+ words of generic AI boilerplate.
   * Google's December 2025 update penalized exactly that pattern. If you can't
   * write it solidly and distinctively as a human (even with AI as a draft tool),
   * leave the field empty — the page renders without the note. HTML allowed.
   */
  editorialNote?: string;

  /** Optional byline shown under the editor's note (name + role). */
  editorialNoteBy?: { name: string; role: string; href?: string };
}
