// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kmc2320.github.io',
  base: '/ghcp-school-info',
  vite: {
    plugins: [tailwindcss()],
  },
});