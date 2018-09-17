#!/usr/bin/env node
import program from 'commander';

export default () => {
  program
    .version('0.0.7')
    .description('Compares two configuration files and shows a difference.')
    .arguments('<firstArgument> <secondArgument>')
    .option('-h, --help', 'output usage information')
    .option('-f, --format [type]', 'output format')
    .action(() => console.log('test message from commander.js'))
    .parse(process.argv);
};
