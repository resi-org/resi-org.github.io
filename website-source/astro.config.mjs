import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://resi.org',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  redirects: { '/workshops/safe-by-design-superintelligence/code-of-conduct': '/code-of-conduct/', '/mission': '/about/', '/announcements': '/news/', '/home-announcements': '/' },
});
