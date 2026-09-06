// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://hanafi-digital.github.io',
  base: '/pepes-emin',
  integrations: [
    sitemap({
      // Never index the 404 page.
      filter: (page) => !page.endsWith('/404') && !page.endsWith('/404/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
