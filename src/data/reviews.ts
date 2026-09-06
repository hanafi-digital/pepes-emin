import type { Review } from "./types";

// TODO(owner): Google Maps Platform Terms forbid permanently storing review
// text, so quotes here must NEVER be copied from the Places API. They must
// be testimonials collected directly from customers, or quotes the owner
// has permission to use. Stays empty until then; the reviews section must
// still render something meaningful when this array is empty.

export const reviews: Review[] = [];
