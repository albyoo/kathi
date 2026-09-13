import { defineConfig } from 'astro/config';

const [owner = 'albyoo', repo = 'kathi'] = (process.env.GITHUB_REPOSITORY ?? 'albyoo/kathi').split('/');

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: `/${repo}`
});
