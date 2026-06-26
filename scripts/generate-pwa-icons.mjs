import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = join(__dirname, "pwa-icon.svg");
const outDir = join(__dirname, "..", "public", "icons");

mkdirSync(outDir, { recursive: true });

const svg = readFileSync(svgPath, "utf8");

for (const size of [192, 512]) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: size },
  });
  const pngBuffer = resvg.render().asPng();
  const outPath = join(outDir, `icon-${size}.png`);
  writeFileSync(outPath, pngBuffer);
  console.log(`Generated ${outPath} (${pngBuffer.length} bytes)`);
}