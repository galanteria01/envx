#!/usr/bin/env bun

import { Command } from "commander";
import { initCommand } from "./commands/init.js";
import { runCommand } from "./commands/run.js";

const program = new Command();

program
  .name("envx")
  .description("Safe env variable manager that prevents secret leaks")
  .version("0.1.0");

program
  .command("init")
  .description("Initialize envx in this repository")
  .action(initCommand);

program
  .command("run")
  .description("Run a command with injected environment variables")
  .argument("<cmd...>", "Command to run")
  .action(runCommand);

program.parse();




