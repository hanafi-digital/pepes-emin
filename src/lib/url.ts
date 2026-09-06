/**
 * Prefixes an internal path with the site's base path.
 *
 * The site is hosted under a sub-path (GitHub Pages project site), so a
 * literal absolute path like "/menu" or "/img.jpg" would 404 in production.
 * Always go through this helper for internal links and asset references.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}

/**
 * Builds an absolute URL for a path already relative to the site root, by
 * prefixing it with the base path and resolving it against Astro.site.
 *
 * .ts modules don't have access to the Astro global, so callers must pass
 * `Astro.site` in from a .astro file's frontmatter.
 */
export function absoluteUrl(site: URL | undefined, path: string): string {
  if (!site) {
    throw new Error('absoluteUrl() requires `site` to be set in astro.config.mjs');
  }
  return new URL(withBase(path), site).toString();
}
