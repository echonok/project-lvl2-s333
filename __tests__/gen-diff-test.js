import fs from 'fs';
import path from 'path';
import genDiff from '../src';

describe('Simle & Complex Tests', () => {
  const path1json = path.join(__dirname, '__fixtures__', 'before.json');
  const path2json = path.join(__dirname, '__fixtures__', 'after.json');

  const path1yml = path.join(__dirname, '__fixtures__', 'before.yml');
  const path2yml = path.join(__dirname, '__fixtures__', 'after.yml');

  const path1ini = path.join(__dirname, '__fixtures__', 'before.ini');
  const path2ini = path.join(__dirname, '__fixtures__', 'after.ini');

  const path1jsonComplex = path.join(__dirname, '__fixtures__', 'before_complex.json');
  const path2jsonComplex = path.join(__dirname, '__fixtures__', 'after_complex.json');

  const path1ymlComplex = path.join(__dirname, '__fixtures__', 'before_complex.yml');
  const path2ymlComplex = path.join(__dirname, '__fixtures__', 'after_complex.yml');

  const path1iniComplex = path.join(__dirname, '__fixtures__', 'before_complex.ini');
  const path2iniComplex = path.join(__dirname, '__fixtures__', 'after_complex.ini');

  it('#gen-diff JSON -> structure', () => {
    const actual = genDiff(path1json, path2json);
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_structure');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> structure', () => {
    const actual = genDiff(path1yml, path2yml, { format: 'structure' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_structure');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> structure', () => {
    const actual = genDiff(path1ini, path2ini, { format: 'structure' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_structure');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff JSON -> plain structure', () => {
    const actual = genDiff(path1json, path2json, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> plain structure', () => {
    const actual = genDiff(path1yml, path2yml, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> plain structure', () => {
    const actual = genDiff(path1ini, path2ini, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff JSON -> JSON', () => {
    const actual = genDiff(path1json, path2json, { format: 'json' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> JSON', () => {
    const actual = genDiff(path1yml, path2yml, { format: 'json' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> JSON', () => {
    const actual = genDiff(path1ini, path2ini, { format: 'json' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff JSON -> structure', () => {
    const actual = genDiff(path1jsonComplex, path2jsonComplex, { format: 'structure' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_structure_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> structure', () => {
    const actual = genDiff(path1ymlComplex, path2ymlComplex, { format: 'structure' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_structure_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> structure', () => {
    const actual = genDiff(path1iniComplex, path2iniComplex, { format: 'structure' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_structure_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff JSON -> plain structure', () => {
    const actual = genDiff(path1jsonComplex, path2jsonComplex, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> plain structure', () => {
    const actual = genDiff(path1ymlComplex, path2ymlComplex, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> plain structure', () => {
    const actual = genDiff(path1iniComplex, path2iniComplex, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff JSON -> JSON', () => {
    const actual = genDiff(path1jsonComplex, path2jsonComplex, { format: 'json' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> JSON', () => {
    const actual = genDiff(path1ymlComplex, path2ymlComplex, { format: 'json' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> JSON', () => {
    const actual = genDiff(path1iniComplex, path2iniComplex, { format: 'json' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });
});
