import fs from "fs";
import path from "path";
import { ENVX_HOME, projectEnvPath } from "../utils/paths.js";

export function initCommand() {
  const project = path.basename(process.cwd());
  const env = "development";
  const refPath = path.join(process.cwd(), ".env.ref");

  if (!fs.existsSync(refPath)) {
    fs.writeFileSync(
      refPath,
      JSON.stringify(
        {
          project,
          env
        },
        null,
        2
      )
    );
    console.log("✅ Created .env.ref");
  }

  const gitignorePath = path.join(process.cwd(), ".gitignore");
  const ignoreRules = "\n.env\n*.env\n.env.*\n";

  if (fs.existsSync(gitignorePath)) {
    const content = fs.readFileSync(gitignorePath, "utf-8");
    if (!content.includes(".env")) {
      fs.appendFileSync(gitignorePath, ignoreRules);
      console.log("✅ Updated .gitignore");
    }
  } else {
    fs.writeFileSync(gitignorePath, ignoreRules);
    console.log("✅ Created .gitignore");
  }

  // Create .envx directory structure
  if (!fs.existsSync(ENVX_HOME)) {
    fs.mkdirSync(ENVX_HOME, { recursive: true });
    console.log(`✅ Created ${ENVX_HOME}`);
  }

  // Create project directory
  const projectDir = path.join(ENVX_HOME, project);
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
    console.log(`✅ Created project directory: ${projectDir}`);
  }

  // Create initial secrets file
  const secretsPath = projectEnvPath(project, env);
  if (!fs.existsSync(secretsPath)) {
    fs.writeFileSync(secretsPath, "# Add your environment variables here\n# Example:\n# API_KEY=your-api-key\n# DATABASE_URL=your-database-url\n");
    console.log(`✅ Created secrets file: ${secretsPath}`);
  }

  console.log("🎉 envx initialized");
}

