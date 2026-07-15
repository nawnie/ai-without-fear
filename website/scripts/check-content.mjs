import { access, readFile } from 'node:fs/promises';

const required = [
  'index.html',
  'programs/index.html',
  'programs/session-1/index.html',
  'programs/session-2/index.html',
  'who-we-serve/index.html',
  'partners/index.html',
  'about/index.html',
  'src/App.jsx',
  'src/components.jsx',
  'src/data.js',
  'src/styles.css',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/_headers',
  'public/site.webmanifest',
  'src/pages/SessionOnePage.jsx',
  'src/pages/SessionTwoPage.jsx',
];

for (const file of required) {
  await access(new URL(`../${file}`, import.meta.url));
}

const data = await readFile(new URL('../src/data.js', import.meta.url), 'utf8');
const home = await readFile(new URL('../src/pages/HomePage.jsx', import.meta.url), 'utf8');
for (const phrase of [
  'Veterans & military families',
  'Government & public service',
  'Nonprofits & community groups',
  'AI should expand human capability',
  'Sessions 1 and 2 are ready to show',
]) {
  const corpus = `${data}\n${home}`;
  if (!corpus.includes(phrase)) throw new Error(`Missing required content: ${phrase}`);
}

console.log(`AIWF content check passed: ${required.length} required files and core audience/program language present.`);
