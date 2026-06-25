import { promises as fs } from "node:fs";
import path from "node:path";

const sourceRoot = path.resolve(".source-parts");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const partFiles = entries
    .filter((entry) => entry.isFile() && entry.name.startsWith("part-"))
    .sort((a, b) => a.name.localeCompare(b.name));

  if (partFiles.length) {
    const relative = path.relative(sourceRoot, dir);
    const target = path.resolve(relative);
    await fs.mkdir(path.dirname(target), { recursive: true });
    const chunks = await Promise.all(
      partFiles.map((entry) => fs.readFile(path.join(dir, entry.name), "utf8")),
    );
    await fs.writeFile(target, chunks.join(""));
    return;
  }

  await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => walk(path.join(dir, entry.name))),
  );
}

await walk(sourceRoot);
