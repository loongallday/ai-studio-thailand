import { bundle } from "@remotion/bundler";
import { renderFrames, selectComposition } from "@remotion/renderer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const outDir = path.resolve(__dirname, "..", "public", "frames");

  // Clean and create output directory
  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true });
  }
  fs.mkdirSync(outDir, { recursive: true });

  console.log("Bundling Remotion project...");
  const bundled = await bundle({
    entryPoint: path.resolve(__dirname, "index.ts"),
    webpackOverride: (config) => config,
  });

  console.log("Selecting composition...");
  const composition = await selectComposition({
    serveUrl: bundled,
    id: "WorkshopVideo",
  });

  console.log(`Rendering ${composition.durationInFrames} frames...`);
  await renderFrames({
    composition,
    serveUrl: bundled,
    outputDir: outDir,
    imageFormat: "jpeg",
    jpegQuality: 85,
    onFrameUpdate: (frame: number) => {
      if (frame % 30 === 0) {
        console.log(`  Frame ${frame}/${composition.durationInFrames}`);
      }
    },
    onStart: () => {
      console.log("Render started...");
    },
  });

  // Rename files to element-000.jpeg pattern
  const files = fs.readdirSync(outDir).filter((f) => f.endsWith(".jpeg")).sort();
  for (let i = 0; i < files.length; i++) {
    const oldPath = path.join(outDir, files[i]);
    const newName = `element-${String(i).padStart(3, "0")}.jpeg`;
    const newPath = path.join(outDir, newName);
    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
    }
  }

  console.log(`Done! ${files.length} frames saved to ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
