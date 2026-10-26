import fs from "fs";
import dotenv from "dotenv";
import { projectEnvPath } from "../utils/paths.js";

export function loadSecrets(project, env) {
  const secretPath = projectEnvPath(project, env);

  if (!fs.existsSync(secretPath)) {
    throw new Error(
      `❌ Secrets not found at ${secretPath}\nRun \`envx init\` or create this file manually.`
    );
  }

  const raw = fs.readFileSync(secretPath);
  const parsed = dotenv.parse(raw);

  return parsed;
}
