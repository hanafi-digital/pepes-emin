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
