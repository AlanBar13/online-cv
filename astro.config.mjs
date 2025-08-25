// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  redirects: {
    '/ads.txt': 'https://srv.adstxtmanager.com/19390/alanbardales.dev'
  }
});