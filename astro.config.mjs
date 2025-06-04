import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site:'https://shevek1.github.io',
  base: '/usyco-fix',
  vite: {
    plugins: [tailwindcss()]
  }
});
