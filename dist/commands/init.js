import fs from "fs";
import path from "path";

export function initCommand() {
  const refPath = path.join(process.cwd(), ".env.ref");

  if (!fs.existsSync(refPath)) {
    fs.writeFileSync(
      refPath,
      JSON.stringify(
        {
          project: path.basename(process.cwd()),
          env: "development"
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

  console.log("🎉 envx initialized");
}

