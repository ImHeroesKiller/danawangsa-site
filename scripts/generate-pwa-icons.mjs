import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const svgPath = join(__dirname, "pwa-icon.svg");
const iconsDir = join(rootDir, "public", "icons");

mkdirSync(iconsDir, { recursive: true });

const svg = readFileSync(svgPath, "utf8");

function renderPng(size) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: size },
  });
  return resvg.render().asPng();
}

/** Modern ICO with embedded PNG (supported by all current browsers) */
function pngToIco(pngBuffer, dimension) {
  const headerSize = 6;
  const entrySize = 16;
  const offset = headerSize + entrySize;
  const ico = Buffer.alloc(offset + pngBuffer.length);

  ico.writeUInt16LE(0, 0);
  ico.writeUInt16LE(1, 2);
  ico.writeUInt16LE(1, 4);

  ico.writeUInt8(dimension >= 256 ? 0 : dimension, 6);
  ico.writeUInt8(dimension >= 256 ? 0 : dimension, 7);
  ico.writeUInt8(0, 8);
  ico.writeUInt8(0, 9);
  ico.writeUInt16LE(1, 10);
  ico.writeUInt16LE(32, 12);
  ico.writeUInt32LE(pngBuffer.length, 14);
  ico.writeUInt32LE(offset, 18);

  pngBuffer.copy(ico, offset);
  return ico;
}

function writeAsset(outPath, buffer) {
  writeFileSync(outPath, buffer);
  console.log(`Generated ${outPath} (${buffer.length} bytes)`);
}

const outputs = [
  { size: 32, path: join(rootDir, "app", "favicon.ico"), asIco: true },
  { size: 80, path: join(rootDir, "public", "logo.png") },
  { size: 180, path: join(iconsDir, "apple-touch-icon.png") },
  { size: 192, path: join(iconsDir, "icon-192.png") },
  { size: 512, path: join(iconsDir, "icon-512.png") },
];

for (const { size, path, asIco } of outputs) {
  const pngBuffer = renderPng(size);
  writeAsset(path, asIco ? pngToIco(pngBuffer, size) : pngBuffer);
}