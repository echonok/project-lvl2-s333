import fs from 'fs';
import path from 'path';
import genDiff from '../src';

describe('Simle Tests', () => {
  it('#gen-diff JSON', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.json');
    const path2 = path.join(__dirname, '__fixtures__', 'after.json');
    const actual = genDiff(path1, path2);
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.yml');
    const path2 = path.join(__dirname, '__fixtures__', 'after.yml');
    const actual = genDiff(path1, path2);
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.ini');
    const path2 = path.join(__dirname, '__fixtures__', 'after.ini');
    const actual = genDiff(path1, path2);
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });
});
