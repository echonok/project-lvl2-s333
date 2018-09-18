import fs from 'fs';
import path from 'path';
import genDiff from '../src';

describe('ProjestTests', () => {
  it('#gen-diff JSON', () => {
    
    const file1 = '__tests__/__fixtures__/after.json';
    const file2 = '__tests__/__fixtures__/before.json';
    const actual = genDiff(file1, file2);

    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected-json');
    console.log(__dirname);
    const rawData = fs.readFileSync(expectedFixturePath, 'utf-8');
    const expected = JSON.parse(rawData);
  
    expect(actual).toEqual(expected);

  });
});
