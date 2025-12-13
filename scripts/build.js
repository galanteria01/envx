import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function build() {
  try {
    const rootDir = path.join(__dirname, "..");
    await fs.copy(path.join(rootDir, "src"), path.join(rootDir, "dist"));
    console.log("✅ Build complete: files copied to dist/");
  } catch (error) {
    console.error("❌ Build failed:", error);
    process.exit(1);
  }
}

build();

