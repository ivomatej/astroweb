export interface NavLink {
  href: string;
  label: string;
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
