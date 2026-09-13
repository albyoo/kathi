import { defineConfig } from 'astro/config';

const [owner = 'albyoo', repo = 'kathi'] = (process.env.GITHUB_REPOSITORY ?? 'albyoo/kathi').split('/');
const isUserOrOrgPagesRepo = repo === `${owner}.github.io`;

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: isUserOrOrgPagesRepo ? '/' : `/${repo}`
});
