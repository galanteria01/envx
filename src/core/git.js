import { execSync } from "child_process";

export function assertNoTrackedEnv() {
  try {
    const output = execSync("git ls-files").toString();

    if (output.match(/^\.env(\..*)?$/m)) {
      throw new Error(
        "❌ A .env file is tracked by git. Remove it immediately."
      );
    }
  } catch (e) {
    if (e.message.includes("tracked by git")) {
      throw e;
    }
    // probably not a git repo – ignore
  }
}
