import { defineConfig } from 'astro/config';

const [owner = 'albyoo', repo = 'kathi'] = (process.env.GITHUB_REPOSITORY ?? 'albyoo/kathi').split('/');
const isUserOrOrgPagesRepo = repo === `${owner}.github.io`;
const defaultSitePath = isUserOrOrgPagesRepo ? '' : `/${repo}`;
const defaultSite = `https://${owner}.github.io${defaultSitePath}`;
const defaultBase = isUserOrOrgPagesRepo ? '/' : `/${repo}/`;

const pagesBaseUrl = process.env.PAGES_BASE_URL;
const isAbsolutePagesUrl = Boolean(pagesBaseUrl && /^https?:\/\//.test(pagesBaseUrl));

const parsedPagesBase = pagesBaseUrl
  ? (isAbsolutePagesUrl ? new URL(pagesBaseUrl).pathname : pagesBaseUrl)
  : defaultBase;

const normalizedBasePath = parsedPagesBase === '/' ? '/' : `/${parsedPagesBase.replace(/^\/+|\/+$/g, '')}/`;
const site = isAbsolutePagesUrl
  ? pagesBaseUrl.replace(/\/+$/g, '')
  : `https://${owner}.github.io${normalizedBasePath === '/' ? '' : normalizedBasePath.slice(0, -1)}`;

export default defineConfig({
  site: pagesBaseUrl ? site : defaultSite,
  base: pagesBaseUrl ? normalizedBasePath : defaultBase
});
