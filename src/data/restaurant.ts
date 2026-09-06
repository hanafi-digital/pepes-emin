import type { Restaurant } from "./types";

// This file is the single source of truth for the restaurant's identity
// content. Fields marked TODO(owner) are not yet confirmed by the owner —
// do not guess a value. Rendering code must handle these nulls gracefully
// (hide the element, show a neutral fallback) rather than assume a value.
//
// Some fields below are marked "web research" instead of TODO(owner): they
// come from cross-referencing 2+ independent public sources (restaurant
// directories), not from the owner directly, and not from an official API.
// They're populated because being wrong carries low harm (a slightly off
// street spelling isn't the same risk as a wrong phone number or price),
// but they're still not authoritative — the owner should confirm them too.
// Fields where being wrong directly harms a customer (hours, phone, exact
// prices, ratings) stay null/TODO(owner) regardless of how many web sources
// agree, because those sources are exactly the kind that go stale.
//
// A separate, stronger tier: fields marked "on-site source" come from
// photographs of the restaurant's own printed menu board and order
// receipts, cross-checked against its Google Business Profile listing.
// That's the restaurant's own posted information, not a third-party
// directory guess, so those fields are populated as real values rather
// than TODO(owner) — except personal contact numbers, which stay gated on
// written consent regardless of how well-confirmed the number itself is.

export const restaurant: Restaurant = {
  name: "RM Pepes Jambal H. Emin",

  // TODO(owner): confirm a one-line tagline, if any.
  tagline: null,

  // TODO(owner): confirm the About section copy (2-4 short paragraphs).
  // Paragraph 3 (menu variety) is grounded in web research cross-referenced
  // across 3+ independent restaurant directories — see
  // docs/pepes-emin/research/adhoc-web-research-2026-09-06.md (workspace docs).
  description: [
    "RM Pepes Jambal H. Emin adalah rumah makan Sunda di Walahar, Karawang, yang menyajikan pepes jambal.",
    "Pepes jambal adalah olahan ikan jambal roti yang dibungkus daun pisang lalu dikukus atau dibakar bersama bumbu khas Sunda.",
    "Selain pepes jambal, menu di sini juga mencakup pepes ayam, ikan bakar, bakakak, dan sate maranggi.",
  ],

  // Grounded in web research (menu variety consistently reported across
  // sources) rather than unverified marketing claims. TODO(owner): confirm
  // and add anything specific to how this restaurant does it differently.
  highlights: [
    "Pepes jambal dibungkus daun pisang, dikukus/dibakar dengan bumbu Sunda",
    "Menu lengkap: pepes, sate maranggi, ikan bakar, bakakak, hingga minuman",
    "Berada langsung di Jalan Bendungan Walahar",
    // Confirmed via the restaurant's Google Business Profile listing.
    "Pembayaran tunai (cash) saja",
  ],

  address: {
    // Web research (cross-referenced 3 independent sources).
    // TODO(owner): confirm exact street/number.
    street: "Jl. Bendungan Walahar No. 65",
    village: "Walahar",
    // Web research (cross-referenced 3 independent sources).
    district: "Klari",
    city: "Karawang",
    province: "Jawa Barat",
    // Web research (cross-referenced 2 independent sources).
    postalCode: "41371",
  },

  // The restaurant sits directly on Jl. Bendungan Walahar itself (the dam's
  // access road), per web research. TODO(owner): a more specific landmark?
  landmark: null,

  // TODO(owner): from official location research — never guess coordinates.
  geo: null,

  // On-site source (menu board + order receipt) and the Google Business
  // Profile listing all agree on 0812-9300-5157, resolving the earlier
  // two-candidate ambiguity from web research in favor of this number.
  // TODO(owner): still needs written consent to publish before this goes
  // from null to the real value — see content-checklist.md (workspace docs).
  phone: null,

  // Same number as `phone` above (the restaurant's own posted "HP" contact,
  // not separately confirmed as WhatsApp-enabled). TODO(owner): written
  // consent to publish, same as `phone`.
  whatsapp: null,

  // Built from the confirmed name + address (no Place ID/API key needed),
  // the same disambiguation query used for the embedded map — confirmed
  // correct against the restaurant's own Google Business Profile listing
  // (name, address, and pin all match this business, not the other
  // similarly-named "H. Dirja" restaurant in the same area).
  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "RM Pepes Jambal H. Emin, Jl. Bendungan Walahar No. 65, Walahar, Klari, Karawang, Jawa Barat",
  )}`,

  googleMapsDirectionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    "RM Pepes Jambal H. Emin, Jl. Bendungan Walahar No. 65, Walahar, Klari, Karawang, Jawa Barat",
  )}`,

  // Web research (cross-referenced 2 independent sources: ~Rp 25,000-50,000
  // per person). A descriptive range carries lower risk than a specific
  // menu price if it drifts, but still TODO(owner): confirm.
  priceRange: "Rp 25.000–50.000 per orang",

  servesCuisine: ["Sunda", "Indonesia"],

  // TODO(owner): only verified social accounts belong here. Web research
  // found no official account for this restaurant, only individual visitor
  // posts tagging the location (not eligible per the ownership-verification
  // rule) — see adhoc-web-research-2026-09-06.md.
  socialLinks: [],
};
