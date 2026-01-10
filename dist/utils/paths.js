import path from "path";
import os from "os";

export const ENVX_HOME = path.join(os.homedir(), ".envx");

export function projectEnvPath(project, env) {
  return path.join(ENVX_HOME, project, `${env}.env`);
}




