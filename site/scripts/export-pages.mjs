import { cpSync, existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const output = fileURLToPath(new URL('../out/', import.meta.url));
const repository = fileURLToPath(new URL('../../', import.meta.url));
const domainFile = join(repository, 'CNAME');
const domain = readFileSync(domainFile, 'utf8');

if (domain.trim() !== 'resi.org') throw new Error('Preserve the existing resi.org domain before exporting.');
if (!existsSync(join(output, 'index.html')) || !existsSync(join(output, '_next'))) {
  throw new Error('Run the Next.js static export successfully before publishing.');
}

const entries = readdirSync(output);
const protectedNames = new Set(['CNAME', 'site', 'assets', 'README.md']);
for (const name of entries) {
  if (name.startsWith('.') || protectedNames.has(name)) {
    throw new Error('Unexpected static-export entry: ' + name);
  }
}
for (const name of entries) {
  cpSync(join(output, name), join(repository, name), { recursive: true });
}
writeFileSync(join(repository, '.nojekyll'), '');
if (readFileSync(domainFile, 'utf8') !== domain) throw new Error('The custom domain changed unexpectedly.');
console.log('GitHub Pages files updated. CNAME remains resi.org.');
