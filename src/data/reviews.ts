import type { Review } from "./types";

// TODO(owner): Google Maps Platform Terms forbid permanently storing review
// text, so quotes here must NEVER be copied from the Places API. They must
// be testimonials collected directly from customers, or quotes the owner
// has permission to use. The three entries below are placeholders (not a
// real customer or a real quote) so the section never renders empty while
// real testimonials are pending — replace each one individually.

export const reviews: Review[] = [
  {
    // TODO(owner): replace with an owner-approved quote.
    quote: "Kutipan ulasan pelanggan akan ditampilkan di sini setelah disetujui pemilik.",
    author: null,
    source: "Menunggu konfirmasi pemilik",
  },
  {
    // TODO(owner): replace with an owner-approved quote.
    quote: "Testimoni pelanggan asli akan tampil di sini begitu tersedia.",
    author: null,
    source: "Menunggu konfirmasi pemilik",
  },
  {
    // TODO(owner): replace with an owner-approved quote.
    quote: "Bagian ini sedang menunggu ulasan pelanggan yang disetujui pemilik.",
    author: null,
    source: "Menunggu konfirmasi pemilik",
  },
];
