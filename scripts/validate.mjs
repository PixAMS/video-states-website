import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  if (['.git', 'node_modules'].includes(entry.name)) return [];
  const full = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(full) : [full];
});
const relative = (file) => path.relative(root, file).split(path.sep).join('/');
const files = walk(root);
const media = files.filter((file) => /\.(png|jpe?g|mp4|svg)$/i.test(file));
const records = media.map((file) => ({
  path: relative(file),
  bytes: statSync(file).size,
  sha256: createHash('sha256').update(readFileSync(file)).digest('hex'),
})).sort((a, b) => a.path.localeCompare(b.path));
const manifestPath = path.join(root, 'ASSET_MANIFEST.json');
if (process.argv.includes('--write-manifest')) {
  writeFileSync(manifestPath, JSON.stringify({ schemaVersion: 1, assets: records }, null, 2) + '\n');
}

const failures = [];
if (!existsSync(manifestPath)) failures.push('Missing ASSET_MANIFEST.json');
else {
  const expected = JSON.parse(readFileSync(manifestPath, 'utf8')).assets;
  if (JSON.stringify(expected) !== JSON.stringify(records)) failures.push('Media manifest differs from packaged files');
}
for (let i = 1; i <= 4; i++) for (const suffix of ['', '-reverse']) {
  if (!existsSync(path.join(root, 'public', 'retake', `video-${i}${suffix}.mp4`))) failures.push(`Missing video pair ${i}${suffix}`);
}
for (const name of ['state-base.png', 'state-colorway.png', 'state-environment.png', 'keyframe-light-shift-v2.png', 'keyframe-full-look-v3.png']) {
  if (!existsSync(path.join(root, 'public', 'retake', name))) failures.push(`Missing ${name}`);
}

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  // Report filenames only: never echo suspected credential text.
  const patterns = [/ltxv_[A-Za-z0-9_-]{20,}/, /gh[pousr]_[A-Za-z0-9]{25,}/, /github_pat_[A-Za-z0-9_]{25,}/, /sk-[A-Za-z0-9_-]{24,}/, /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, /[A-Z]:[\\/]Users[\\/]/i];
  if (patterns.some((rx) => rx.test(content))) failures.push(`Sensitive-pattern match: ${relative(file)}`);
  if (!file.endsWith('.md')) continue;
  for (const match of content.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
    const href = match[1].replace(/^<|>$/g, '');
    if (/^(https?:|mailto:|#)/.test(href)) continue;
    const target = decodeURIComponent(href.split('#')[0]);
    if (target && !existsSync(path.resolve(path.dirname(file), target))) failures.push(`Broken link in ${relative(file)}: ${target}`);
  }
}
const forbidden = files.filter((file) => /^\.env(?:\.|$)/.test(path.basename(file)) || /\.(aep|fig|psd|prproj)$/i.test(file));
for (const file of forbidden) failures.push(`Unexpected private/source file: ${relative(file)}`);
if (failures.length) {
  for (const failure of failures) console.error(failure);
  process.exitCode = 1;
} else {
  console.log(`PASS: ${records.length} media files, hashes, required assets, relative Markdown links and common sensitive-pattern checks.`);
  console.log('Video seam quality and a clean-room app build still require separate browser QA.');
}
