import { execa } from "execa";
import { loadEnvRef } from "../core/config.js";
import { loadSecrets } from "../core/secrets.js";
import { assertNoTrackedEnv } from "../core/git.js";

export async function runCommand(cmd) {
  assertNoTrackedEnv();

  const { project, env } = loadEnvRef();
  const secrets = loadSecrets(project, env);

  const command = cmd[0];
  const args = cmd.slice(1);

  console.log(`🚀 Running with envx (${project}:${env})`);

  await execa(command, args, {
    stdio: "inherit",
    env: {
      ...process.env,
      ...secrets
    }
  });
}

