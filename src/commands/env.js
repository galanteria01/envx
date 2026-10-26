import fs from "fs";
import path from "path";
import { loadEnvRef, saveEnvRef } from "../core/config.js";
import { ENVX_HOME, projectEnvPath } from "../utils/paths.js";

export function listEnvCommand() {
  const { project } = loadEnvRef();
  const envDir = path.join(ENVX_HOME, project);

  if (!fs.existsSync(envDir)) {
    console.log(`No environment directory found at ${envDir}`);
    return;
  }

  const files = fs.readdirSync(envDir);
  const envFiles = files.filter((f) => f.endsWith(".env"));

  if (envFiles.length === 0) {
    console.log("No environments found.");
    return;
  }

  const envs = envFiles.map((f) => f.replace(/\.env$/, ""));
  console.log("Available environments:");
  envs.forEach((e) => console.log(`  ${e}`));
}

export function setEnvCommand(name) {
  const config = loadEnvRef();
  config.env = name;
  saveEnvRef(process.cwd(), config);
  console.log(`✅ Environment set to "${name}"`);
}

export function currentEnvCommand() {
  const { env } = loadEnvRef();
  console.log(env);
}
