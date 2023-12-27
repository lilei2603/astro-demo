import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://enchanting-yeot-a641c4.netlify.app/",
  integrations: [preact()]
});