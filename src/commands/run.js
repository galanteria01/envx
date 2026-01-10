import { execa } from "execa";
import { loadEnvRef } from "../core/config.js";
import { loadSecrets } from "../core/secrets.js";
import { assertNoTrackedEnv } from "../core/git.js";
import os from "os";

export async function runCommand(cmd) {
  assertNoTrackedEnv();

  const { project, env } = loadEnvRef();
  const secrets = loadSecrets(project, env);

  const command = cmd.join(" ");
  const shell = process.env.SHELL || (os.platform() === "win32" ? "cmd.exe" : "/bin/sh");

  console.log(`🚀 Running with envx (${project}:${env})`);

  await execa(shell, ["-c", command], {
    stdio: "inherit",
    env: {
      ...process.env,
      ...secrets
    }
  });
}

