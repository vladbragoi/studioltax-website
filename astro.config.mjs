// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://studioltax.it',
  base: process.env.BASE_PATH || '',
  integrations: [react(), mdx()],
});
