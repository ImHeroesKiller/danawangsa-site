import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = join(__dirname, "og-image.svg");
const outPath = join(__dirname, "..", "public", "og-image.png");

const svg = readFileSync(svgPath, "utf8");
const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: 1200 },
});
const pngData = resvg.render();
const pngBuffer = pngData.asPng();

writeFileSync(outPath, pngBuffer);
console.log(`Generated ${outPath} (${pngBuffer.length} bytes)`);