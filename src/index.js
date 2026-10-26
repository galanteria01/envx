#!/usr/bin/env bun

import { Command } from "commander";
import { initCommand } from "./commands/init.js";
import { runCommand } from "./commands/run.js";
import { listEnvCommand, setEnvCommand, currentEnvCommand } from "./commands/env.js";
import { editCommand } from "./commands/edit.js";

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
  .option("--env <env>", "Override environment")
  .option("--dry-run", "Preview secrets without running command")
  .action(runCommand);

const envCommand = new Command()
  .name("env")
  .description("Manage environments")
  .action(() => envCommand.outputHelp());

envCommand
  .command("list")
  .description("List available environments")
  .action(listEnvCommand);

envCommand
  .command("set <env>")
  .description("Set current environment")
  .action(setEnvCommand);

envCommand
  .command("current")
  .description("Show current environment")
  .action(currentEnvCommand);

program.addCommand(envCommand);

program
  .command("edit")
  .description("Edit your secrets file in $EDITOR")
  .action(editCommand);

program.parse();
