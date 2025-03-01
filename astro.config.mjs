import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [svelte(), react(), tailwind()],
  site: 'https://justaghost.github.io',
  base: '/RegalRoots',
  // Remove the remarkMermaid plugin if you're using the custom component approach
  markdown: {
    remarkPlugins: []
  },
  devOptions: { open: '/RegalRoots' }
});
