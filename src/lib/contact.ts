/**
 * Builds a wa.me link with a pre-filled message, or null if no WhatsApp
 * number is available — callers must not render a button in that case.
 */
export function waLink(phone: string | null, message: string): string | null {
  if (!phone) return null;
  const normalized = phone
    .replace(/[\s-]/g, '')
    .replace(/^\+/, '')
    .replace(/^0/, '62');
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}
