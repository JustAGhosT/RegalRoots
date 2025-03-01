import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import remarkMermaid from 'remark-mermaidjs';

export default defineConfig({
  integrations: [svelte(), react(), tailwind()],
  site: 'https://justaghost.github.io',
  base: '/RegalRoots',
  markdown: {
    remarkPlugins: [
      [remarkMermaid, { theme: 'forest' }] // Choose your preferred theme: 'dark', 'forest', 'default', etc.
    ]
  },
  devOptions: { open: '/RegalRoots' }
});
