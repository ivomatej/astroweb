export interface NavLink {
  href: string;
  label: string;
  /**
   * Optional mega-menu panel attached to this primary-nav item.
   * Renders as a wide dropdown on hover/focus (desktop only). Mobile
   * navigation is just the link itself, no panel.
   */
  mega?: MegaMenuPanel;
}

/** Single column inside a mega-menu panel. */
export interface MegaMenuSection {
  title: string;
  icon: MegaMenuIcon;
  links: NavLink[];
  /** Optional "Zobrazit více →" footer link for the column. */
  showMore?: NavLink;
}

export type MegaMenuIcon =
  | "appliance"
  | "tool"
  | "leaf"
  | "car"
  | "service"
  | "guide"
  | "news";

export interface MegaMenuBrand {
  name: string;
  href: string;
}

export interface MegaMenuPanel {
  /** 2–4 columns per panel. */
  sections: MegaMenuSection[];
  /** Optional bottom row of brand links shared across all panels. */
  brandsLabel?: string;
  brands?: MegaMenuBrand[];
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export interface SocialLink {
  href: string;
  label: string;
  icon: "facebook" | "youtube" | "rss";
}

export interface NewsletterCopy {
  eyebrow: string;
  title: string;
  description: string;
  consentText: string;
  consentLinkHref: string;
}

export interface TopBarCopy {
  flag: string;
  links: NavLink[];
}

export interface BrandInfo {
  name: string;
  tagline: string;
  domain: string;
  foundedYear: number;
  versionLabel: string;
}

export interface FooterDefaults {
  brandTagline: string;
  columns: FooterColumn[];
  legal: NavLink[];
  socials: SocialLink[];
}

export interface SiteConfig {
  brand: BrandInfo;
  topBar: TopBarCopy;
  primaryNav: NavLink[];
  newsletter: NewsletterCopy;
  footer: FooterDefaults;
}

/**
 * Optional context passed to <Footer /> from a category or article page.
 * When present, replaces the dynamic columns (typically 1–2) with
 * category-specific links. Columns not provided fall back to defaults.
 */
export interface FooterCategoryContext {
  categorySlug: string;
  categoryLabel: string;
  columns: FooterColumn[];
}
