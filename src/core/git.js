import { execSync } from "child_process";

export function assertNoTrackedEnv() {
  try {
    const output = execSync("git ls-files").toString();

    if (output.match(/\.env(\.|$)/)) {
      throw new Error(
        "❌ A .env file is tracked by git. Remove it immediately."
      );
    }
  } catch {
    // probably not a git repo – ignore
  }
}




