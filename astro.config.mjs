// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

import remarkToc from 'remark-toc';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: "https://hrkz.github.io/",
  base: "/",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [
      remarkMath,
      [remarkToc, { heading: "contents", ordered: true }], 
    ],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" }
    }
  },
});