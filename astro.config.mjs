import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  site:'https://shevek1.github.io',
  base: '/usyco-fix',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});