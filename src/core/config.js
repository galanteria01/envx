import fs from "fs";
import path from "path";

export function loadEnvRef(cwd = process.cwd()) {
  const refPath = path.join(cwd, ".env.ref");

  if (!fs.existsSync(refPath)) {
    throw new Error(
      "❌ .env.ref not found.\nRun `envx init` first to initialize envx in this repository."
    );
  }

  const raw = fs.readFileSync(refPath, "utf-8");
  const config = JSON.parse(raw);

  if (!config.project || !config.env) {
    throw new Error(
      "❌ Invalid .env.ref format.\nRun `envx init` to regenerate a valid .env.ref file."
    );
  }

  return config;
}

export function saveEnvRef(cwd = process.cwd(), config) {
  const refPath = path.join(cwd, ".env.ref");
  fs.writeFileSync(refPath, JSON.stringify(config, null, 2));
}
