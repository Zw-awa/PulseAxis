// SPDX-FileCopyrightText: 2026 Zw-awa
// SPDX-License-Identifier: Apache-2.0

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const siteRoot = resolve(root, "site");
const pages = readdirSync(siteRoot)
  .filter((name) => name.endsWith(".html"))
  .map((name) => resolve(siteRoot, name));
const linkPattern = /\b(?:href|src)=["']([^"']+)["']/gi;
const failures = [];

for (const page of pages) {
  const contents = readFileSync(page, "utf8");

  for (const match of contents.matchAll(linkPattern)) {
    const link = match[1];
    if (/^(?:[a-z]+:|\/\/|#)/i.test(link)) continue;

    const path = decodeURIComponent(link.split(/[?#]/, 1)[0]);
    let target = resolve(dirname(page), path);
    const relativeTarget = relative(siteRoot, target);

    if (relativeTarget === ".." || relativeTarget.startsWith(`..${sep}`)) {
      failures.push(`${relative(root, page)}: link escapes site directory: ${link}`);
      continue;
    }

    if (existsSync(target) && statSync(target).isDirectory()) {
      target = resolve(target, "index.html");
    }

    if (!existsSync(target)) {
      failures.push(`${relative(root, page)}: missing target: ${link}`);
    }
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Checked ${pages.length} HTML files: all local links resolve.`);
}
