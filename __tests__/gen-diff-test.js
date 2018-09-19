import fs from 'fs';
import path from 'path';
import genDiff from '../src';

describe('ProjestTests', () => {
  it('#gen-diff JSON', () => {
    const file1 = path.join(__dirname, '__fixtures__', 'before.json');
    const file2 = path.join(__dirname, '__fixtures__', 'after.json');
    const actual = genDiff(file1, file2);
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected');    
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML', () => {
    const file1 = path.join(__dirname, '__fixtures__', 'before.yml');
    const file2 = path.join(__dirname, '__fixtures__', 'after.yml');
    const actual = genDiff(file1, file2);
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected');    
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

});
