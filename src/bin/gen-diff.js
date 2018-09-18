#!/usr/bin/env node

import program from 'commander';

program
  .version('0.0.7')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstArgument> <secondArgument>')
  .option('-f, --format [type]', 'Output format')
  .action((firstArgument, secondArgument) => {
    console.log(differ(firstArgument, secondArgument));
  })
  .parse(process.argv);
