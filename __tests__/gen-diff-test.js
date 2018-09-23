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
    const actual = genDiff(path1json, path2json, 'structure');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_structure');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> structure', () => {
    const actual = genDiff(path1yml, path2yml, 'structure');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_structure');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> structure', () => {
    const actual = genDiff(path1ini, path2ini, 'structure');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_structure');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff JSON -> plain structure', () => {
    const actual = genDiff(path1json, path2json, 'plain');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> plain structure', () => {
    const actual = genDiff(path1yml, path2yml, 'plain');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> plain structure', () => {
    const actual = genDiff(path1ini, path2ini, 'plain');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff JSON -> JSON', () => {
    const actual = genDiff(path1json, path2json, 'json');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> JSON', () => {
    const actual = genDiff(path1yml, path2yml, 'json');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> JSON', () => {
    const actual = genDiff(path1ini, path2ini, 'json');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff JSON -> structure', () => {
    const actual = genDiff(path1jsonComplex, path2jsonComplex, 'structure');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_structure_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> structure', () => {
    const actual = genDiff(path1ymlComplex, path2ymlComplex, 'structure');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_structure_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> structure', () => {
    const actual = genDiff(path1iniComplex, path2iniComplex, 'structure');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_structure_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff JSON -> plain structure', () => {
    const actual = genDiff(path1jsonComplex, path2jsonComplex, 'plain');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> plain structure', () => {
    const actual = genDiff(path1ymlComplex, path2ymlComplex, 'plain');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> plain structure', () => {
    const actual = genDiff(path1iniComplex, path2iniComplex, 'plain');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff JSON -> JSON', () => {
    const actual = genDiff(path1jsonComplex, path2jsonComplex, 'json');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> JSON', () => {
    const actual = genDiff(path1ymlComplex, path2ymlComplex, 'json');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> JSON', () => {
    const actual = genDiff(path1iniComplex, path2iniComplex, 'json');
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });
});
