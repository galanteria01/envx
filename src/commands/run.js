import { execa } from "execa";
import { loadEnvRef } from "../core/config.js";
import { loadSecrets } from "../core/secrets.js";
import { assertNoTrackedEnv } from "../core/git.js";
import os from "os";

export async function runCommand(cmd, options = {}) {
  assertNoTrackedEnv();

  const { project, env } = loadEnvRef();
  const resolvedEnv = options.env || env;
  const secrets = loadSecrets(project, resolvedEnv);

  const command = cmd.join(" ");
  const isWin = os.platform() === "win32";
  const shell = process.env.SHELL || (isWin ? "cmd.exe" : "/bin/sh");
  const shellFlag = isWin ? "/c" : "-c";

  console.log(`🚀 Running with envx (${project}:${resolvedEnv})`);

  if (options.dryRun) {
    console.log("[Dry Run]");
    console.log("SECRETS:", Object.keys(secrets).join(", "));
    process.exit(0);
  }

  await execa(shell, [shellFlag, command], {
    stdio: "inherit",
    env: {
      ...process.env,
      ...secrets
    }
  });
}
