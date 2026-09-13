import { defineConfig } from 'astro/config';

const [owner = 'albyoo', repo = 'kathi'] = (process.env.GITHUB_REPOSITORY ?? 'albyoo/kathi').split('/');
const isUserOrOrgPagesRepo = repo === `${owner}.github.io`;
const sitePath = isUserOrOrgPagesRepo ? '' : `/${repo}`;

export default defineConfig({
  site: `https://${owner}.github.io${sitePath}`,
  base: isUserOrOrgPagesRepo ? '/' : `/${repo}/`
});
