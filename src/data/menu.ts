import type { MenuCategory } from "./types";

// TODO(owner): the full menu awaits delivery-aggregator research and price
// confirmation from the owner. "Pepes Jambal" is certain (it's the
// restaurant's namesake dish), so it's listed with a null price/description
// pending confirmation. The other categories are intentionally left empty
// rather than filled with invented dish names.

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
    ],
  },
  {
    // TODO(owner): fill from aggregator research + owner confirmation.
    name: "Lauk Pendamping",
    items: [],
  },
  {
    // TODO(owner): fill from aggregator research + owner confirmation.
    name: "Minuman",
    items: [],
  },
];
