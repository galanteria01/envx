import fs from "fs";
import { execa } from "execa";
import { loadEnvRef } from "../core/config.js";
import { projectEnvPath } from "../utils/paths.js";

export async function editCommand() {
  const { project, env } = loadEnvRef();
  const secretsPath = projectEnvPath(project, env);

  if (!fs.existsSync(secretsPath)) {
    fs.writeFileSync(
      secretsPath,
      "# Add your environment variables here\n# Example:\n# API_KEY=your-api-key\n# DATABASE_URL=your-database-url\n"
    );
    console.log(`✅ Created secrets file: ${secretsPath}`);
  }

  const editor = process.env.EDITOR || "vi";

  await execa(editor, [secretsPath], {
    stdio: "inherit"
  });
}
