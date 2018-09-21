import fs from 'fs';
import path from 'path';
import genDiff from '../src';

describe('Simle Tests', () => {
  it('#gen-diff JSON', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.json');
    const path2 = path.join(__dirname, '__fixtures__', 'after.json');
    const actual = genDiff(path1, path2, { format: 'default' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.yml');
    const path2 = path.join(__dirname, '__fixtures__', 'after.yml');
    const actual = genDiff(path1, path2, { format: 'default' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.ini');
    const path2 = path.join(__dirname, '__fixtures__', 'after.ini');
    const actual = genDiff(path1, path2, { format: 'default' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });
});

describe('Complex Tests', () => {
  it('#gen-diff JSON', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before_complex.json');
    const path2 = path.join(__dirname, '__fixtures__', 'after_complex.json');
    const actual = genDiff(path1, path2, { format: 'default' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before_complex.yml');
    const path2 = path.join(__dirname, '__fixtures__', 'after_complex.yml');
    const actual = genDiff(path1, path2, { format: 'default' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before_complex.ini');
    const path2 = path.join(__dirname, '__fixtures__', 'after_complex.ini');
    const actual = genDiff(path1, path2, { format: 'default' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });
});

describe('Simle Tests - plain', () => {
  it('#gen-diff JSON - plain', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.json');
    const path2 = path.join(__dirname, '__fixtures__', 'after.json');
    const actual = genDiff(path1, path2, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML - plain', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.yml');
    const path2 = path.join(__dirname, '__fixtures__', 'after.yml');
    const actual = genDiff(path1, path2, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI - plain', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.ini');
    const path2 = path.join(__dirname, '__fixtures__', 'after.ini');
    const actual = genDiff(path1, path2, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });
});

describe('Complex Tests - plain', () => {
  it('#gen-diff JSON - plain', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before_complex.json');
    const path2 = path.join(__dirname, '__fixtures__', 'after_complex.json');
    const actual = genDiff(path1, path2, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_complex_plain');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML - plain', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before_complex.yml');
    const path2 = path.join(__dirname, '__fixtures__', 'after_complex.yml');
    const actual = genDiff(path1, path2, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_complex_plain');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI - plain', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before_complex.ini');
    const path2 = path.join(__dirname, '__fixtures__', 'after_complex.ini');
    const actual = genDiff(path1, path2, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_complex_plain');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });
});
