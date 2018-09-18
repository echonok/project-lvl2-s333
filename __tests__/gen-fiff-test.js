import genDiff from '../src';

describe('gen-diff', () => {
  const file1 = '__tests__/__fixtures__/after.json';
  const file2 = '__tests__/__fixtures__/before.json';

  const actual = genDiff(file1, file2);

  const expected = '{\n\t- follow: false\n\t  host: hexlet.io\n\t- proxy: 123.234.53.22\n\t+ timeout: 20\n\t- timeout: 50\n\t+ verbose: true\n}';
  expect(actual).toEqual(expected);
});
