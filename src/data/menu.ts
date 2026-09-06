import type { MenuCategory } from "./types";

// Dish names below are grounded in web research (cross-referenced across
// 3+ independent restaurant directories — see
// docs/pepes-emin/research/adhoc-web-research-2026-09-06.md, workspace docs)
// rather than the owner or an official menu. Existence of each dish is
// well-corroborated; prices are not (no source had per-item prices), so
// every price stays null pending aggregator research or owner confirmation.
// Do not add a dish name that isn't backed by that research or the owner.

export const menu: MenuCategory[] = [
  {
    name: "Menu Utama",
    items: [
      {
        name: "Pepes Jambal",
        // TODO(owner): confirm description and price.
        description: null,
        priceIdr: null,
        image: null,
        isFeatured: true,
        isAvailable: true,
      },
      {
        name: "Pepes Ayam",
        description: null,
        priceIdr: null,
        image: null,
        isFeatured: true,
        isAvailable: true,
      },
      {
        name: "Ayam Bakar",
        description: null,
        priceIdr: null,
        image: null,
        isFeatured: true,
        isAvailable: true,
      },
      {
        name: "Ikan Bakar",
        description: null,
        priceIdr: null,
        image: null,
        isFeatured: false,
        isAvailable: true,
      },
      {
        name: "Pepes Tahu",
        description: null,
        priceIdr: null,
        image: null,
        isFeatured: false,
        isAvailable: true,
      },
      {
        name: "Pepes Jeroan",
        description: null,
        priceIdr: null,
        image: null,
        isFeatured: false,
        isAvailable: true,
      },
    ],
  },
  {
    name: "Lauk Pendamping",
    items: [
      {
        name: "Sate Sapi",
        description: null,
        priceIdr: null,
        image: null,
        isFeatured: false,
        isAvailable: true,
      },
      {
        name: "Sambal Lalapan",
        description: null,
        priceIdr: null,
        image: null,
        isFeatured: false,
        isAvailable: true,
      },
      {
        name: "Gorengan",
        description: null,
        priceIdr: null,
        image: null,
        isFeatured: false,
        isAvailable: true,
      },
      {
        name: "Nasi",
        description: null,
        priceIdr: null,
        image: null,
        isFeatured: false,
        isAvailable: true,
      },
    ],
  },
  {
    // TODO(owner): no drink menu was found via web research — needs
    // aggregator research or owner confirmation.
    name: "Minuman",
    items: [],
  },
];
