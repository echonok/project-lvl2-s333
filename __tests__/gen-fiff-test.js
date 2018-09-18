import genDiff from '../src';

test('gen-diff', () => {
  const file1 = '__tests__/__fixtures__/after.json';
  const file2 = '__tests__/__fixtures__/before.json';

  const actual = genDiff(file1, file2);

  const expected = `{
    - follow: false
      host: hexlet.io
    - proxy: 123.234.53.22
    + timeout: 50
    - timeout: 20
    + verbose: true
  }`;
  expect(actual).toBe(expected);
});
