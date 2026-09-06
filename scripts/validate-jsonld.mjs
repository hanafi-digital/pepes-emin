#!/usr/bin/env node
/**
 * Parses every JSON-LD block out of dist/index.html and dist/menu/index.html
 * and checks it's syntactically valid JSON plus has the fields this project
 * requires. Run after `npm run build`.
 */
import { readFileSync } from 'node:fs';

const REQUIRED_RESTAURANT_FIELDS = [
  'name',
  'address',
  'url',
  'image',
  'servesCuisine',
  'priceRange',
  'hasMenu',
];

let failed = false;

function extractJsonLdBlocks(html) {
  const blocks = [];
  const re = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let match;
  while ((match = re.exec(html)) !== null) {
    blocks.push(match[1]);
  }
  return blocks;
}

function check(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    failed = true;
  } else {
    console.log(`OK:   ${message}`);
  }
}

function validateIndex() {
  const html = readFileSync('dist/index.html', 'utf8');
  const blocks = extractJsonLdBlocks(html);
  check(blocks.length >= 1, 'dist/index.html has at least one JSON-LD block');

  const restaurantBlock = blocks
    .map((b) => JSON.parse(b))
    .find((d) => d['@type'] === 'Restaurant');

  check(Boolean(restaurantBlock), 'a Restaurant JSON-LD block exists on the home page');
  if (!restaurantBlock) return;

  for (const field of REQUIRED_RESTAURANT_FIELDS) {
    check(field in restaurantBlock, `Restaurant JSON-LD has required field "${field}"`);
  }

  check(
    restaurantBlock.address?.addressLocality === 'Karawang',
    'address.addressLocality is "Karawang"'
  );

  check(
    !('aggregateRating' in restaurantBlock) && !('review' in restaurantBlock),
    'no aggregateRating or review field is present (never copy ratings from third parties)'
  );
}

function validateMenu() {
  const html = readFileSync('dist/menu/index.html', 'utf8');
  const blocks = extractJsonLdBlocks(html).map((b) => JSON.parse(b));
  const breadcrumb = blocks.find((d) => d['@type'] === 'BreadcrumbList');
  check(Boolean(breadcrumb), 'a BreadcrumbList JSON-LD block exists on the menu page');
  check(
    Array.isArray(breadcrumb?.itemListElement) && breadcrumb.itemListElement.length === 2,
    'BreadcrumbList has exactly 2 items (Beranda, Menu)'
  );
}

validateIndex();
validateMenu();

if (failed) {
  console.error('\nvalidate:jsonld FAILED');
  process.exit(1);
}
console.log('\nvalidate:jsonld passed');
