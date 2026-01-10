import fs from "fs";
import path from "path";

export function loadEnvRef(cwd = process.cwd()) {
  const refPath = path.join(cwd, ".env.ref");

  if (!fs.existsSync(refPath)) {
    throw new Error("❌ .env.ref not found. Run `envx init` first.");
  }

  const raw = fs.readFileSync(refPath, "utf-8");
  const config = JSON.parse(raw);

  if (!config.project || !config.env) {
    throw new Error("❌ Invalid .env.ref format");
  }

  return config;
}




