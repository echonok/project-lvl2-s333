#!/usr/bin/env node

import { version, description } from '../../package.json';
import program from 'commander';
import genDiff from '..';

program
  .version(version)
  .description(description )
  .arguments('<firstArgument> <secondArgument>')
  .option('-f, --format [type]', 'Output format')
  .action((path1, path2) => console.log(genDiff(path1, path2)));
  .parse(process.argv);