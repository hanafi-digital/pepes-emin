export interface GeoCoordinates {
  lat: number;
  lng: number;
}

export interface Address {
  street: string | null;
  village: string;
  district: string | null;
  city: string;
  province: string;
  postalCode: string | null;
}

export interface SocialLink {
  platform: "instagram" | "facebook" | "youtube" | "tripadvisor" | "tiktok";
  url: string;
  handle: string;
  verified: boolean;
}

export interface Restaurant {
  name: string;
  tagline: string | null;
  description: string[];
  address: Address;
  landmark: string | null;
  geo: GeoCoordinates | null;
  phone: string | null;
  whatsapp: string | null;
  googleMapsUrl: string | null;
  googleMapsDirectionsUrl: string | null;
  priceRange: string | null;
  servesCuisine: string[];
  socialLinks: SocialLink[];
}

export type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export interface OpeningHour {
  day: DayOfWeek;
  closed: boolean;
  opens: string | null;
  closes: string | null;
}

export interface MenuItem {
  name: string;
  description: string | null;
  priceIdr: number | null;
  image: string | null;
  isFeatured: boolean;
  isAvailable: boolean;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface Review {
  quote: string;
  author: string;
  source: string;
}
