import program from 'commander';

export default () => {
  program
    .desciption('Compares two configuration files and shows a difference.')
    .option('-h, --help', 'output usage information')
    .option('-V, --version', 'output the version number')
    .option('-f, --format [type]', 'output format')
    .arguments('arguments');
};
