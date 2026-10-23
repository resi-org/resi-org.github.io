import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://resi.org',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  redirects: { '/mission': '/about/', '/announcements': '/news/', '/home-announcements': '/' },
});
