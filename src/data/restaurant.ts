import type { Restaurant } from "./types";

// This file is the single source of truth for the restaurant's identity
// content. Fields marked TODO(owner) are not yet confirmed by the owner —
// do not guess a value. Rendering code must handle these nulls gracefully
// (hide the element, show a neutral fallback) rather than assume a value.

export const restaurant: Restaurant = {
  name: "RM Pepes Jambal H. Emin",

  // TODO(owner): confirm a one-line tagline, if any.
  tagline: null,

  // TODO(owner): confirm the About section copy (2-4 short paragraphs).
  // The placeholder below states only facts already known (name, location,
  // cuisine) — no founding year, awards, or unverified claims.
  description: [
    "RM Pepes Jambal H. Emin adalah rumah makan Sunda di Walahar, Karawang, yang menyajikan pepes jambal.",
    "Pepes jambal adalah olahan ikan jambal roti yang dibungkus daun pisang lalu dikukus atau dibakar bersama bumbu khas Sunda.",
  ],

  // TODO(owner): confirm 3-4 specific strengths (recipe, sourcing, setting,
  // etc.) with the owner before publishing any. Left empty rather than
  // filled with unverified claims.
  highlights: [],

  address: {
    // TODO(owner): confirm street name and number.
    street: null,
    village: "Walahar",
    // TODO(owner): confirm district (kecamatan).
    district: null,
    city: "Karawang",
    province: "Jawa Barat",
    // TODO(owner): confirm postal code.
    postalCode: null,
  },

  // TODO(owner): confirm nearest landmark, if any.
  landmark: null,

  // TODO(owner): from official location research — never guess coordinates.
  geo: null,

  // TODO(owner): confirm phone number before publishing.
  phone: null,

  // TODO(owner): requires the owner's written consent before publishing
  // (personal data).
  whatsapp: null,

  // TODO(owner): from Google Business Profile research.
  googleMapsUrl: null,

  // TODO(owner): built from the Google Business Profile Place ID.
  googleMapsDirectionsUrl: null,

  // TODO(owner): per-person price range, from location and menu research.
  priceRange: null,

  servesCuisine: ["Sunda", "Indonesia"],

  // TODO(owner): only verified social accounts belong here.
  socialLinks: [],
};
