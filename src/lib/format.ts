/**
 * Formats a price in Indonesian Rupiah, e.g. 1234567 -> "Rp 1.234.567".
 * Returns "Rp —" for a null/unconfirmed price rather than "Rp NaN" or "Rp 0".
 */
export function formatIdr(value: number | null): string {
  if (value === null) {
    return 'Rp —';
  }
  return `Rp ${value.toLocaleString('id-ID')}`;
}
