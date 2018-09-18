#!/usr/bin/env node

import program from 'commander';
import genDiff from '../';

program
  .version('0.0.7')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstArgument> <secondArgument>')
  .option('-f, --format [type]', 'Output format')
  .action((firstArgument, secondArgument) => genDiff(firstArgument, secondArgument))
  .parse(process.argv);
