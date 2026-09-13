import { defineConfig } from 'astro/config';

const pagesBaseUrl = process.env.PAGES_BASE_URL;
const repository = process.env.GITHUB_REPOSITORY;

let site;
let base = '/';

if (pagesBaseUrl) {
  if (/^https?:\/\//.test(pagesBaseUrl)) {
    const url = new URL(pagesBaseUrl);
    site = url.origin;
    base = url.pathname === '/' ? '/' : `${url.pathname.replace(/\/+$/g, '')}/`;
  } else {
    base = pagesBaseUrl === '/' ? '/' : `/${pagesBaseUrl.replace(/^\/+|\/+$/g, '')}/`;
  }
} else if (repository) {
  const [owner = '', repo = ''] = repository.split('/');
  const isUserOrOrgPagesRepo = repo === `${owner}.github.io`;
  if (owner) {
    site = `https://${owner}.github.io`;
  }
  if (repo && !isUserOrOrgPagesRepo) {
    base = `/${repo}/`;
  }
}

export default defineConfig({
  site,
  base
});
