import mainFunc from '../src';

test('gen-diff', () => {
  const config1 = '__tests__/__fixtures__/after.json';
  const config2 = '__tests__/__fixtures__/before.json';

  const actual = mainFunc(config1, config2);

  const expected = `{
    {
      "timeout": 20,
      "verbose": true,
      "host": "hexlet.io"
    }
  }`;
  expect(actual).toBe(expected);
});
