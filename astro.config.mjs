import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',

  // ← metti il nome repo se usi GitHub Pages
  base: '/jate-cv/',

  vite: {
    plugins: [tailwindcss()]
  }
});


