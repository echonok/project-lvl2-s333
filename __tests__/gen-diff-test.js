import fs from 'fs';
import path from 'path';
import genDiff from '../src';

describe('Simle Tests -> structure', () => {
  it('#gen-diff JSON -> structure', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.json');
    const path2 = path.join(__dirname, '__fixtures__', 'after.json');
    const actual = genDiff(path1, path2, { format: 'default' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_default');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> structure', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.yml');
    const path2 = path.join(__dirname, '__fixtures__', 'after.yml');
    const actual = genDiff(path1, path2, { format: 'default' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_default');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> structure', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.ini');
    const path2 = path.join(__dirname, '__fixtures__', 'after.ini');
    const actual = genDiff(path1, path2, { format: 'default' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_default');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });
});

describe('Complex Tests -> structure', () => {
  it('#gen-diff JSON -> structure', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before_complex.json');
    const path2 = path.join(__dirname, '__fixtures__', 'after_complex.json');
    const actual = genDiff(path1, path2, { format: 'default' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_default_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> structure', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before_complex.yml');
    const path2 = path.join(__dirname, '__fixtures__', 'after_complex.yml');
    const actual = genDiff(path1, path2, { format: 'default' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_default_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> structure', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before_complex.ini');
    const path2 = path.join(__dirname, '__fixtures__', 'after_complex.ini');
    const actual = genDiff(path1, path2, { format: 'default' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_default_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });
});

describe('Simle Tests -> plain structure', () => {
  it('#gen-diff JSON -> plain structure', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.json');
    const path2 = path.join(__dirname, '__fixtures__', 'after.json');
    const actual = genDiff(path1, path2, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> plain structure', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.yml');
    const path2 = path.join(__dirname, '__fixtures__', 'after.yml');
    const actual = genDiff(path1, path2, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> plain structure', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.ini');
    const path2 = path.join(__dirname, '__fixtures__', 'after.ini');
    const actual = genDiff(path1, path2, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });
});

describe('Complex Tests -> plain structure', () => {
  it('#gen-diff JSON -> plain structure', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before_complex.json');
    const path2 = path.join(__dirname, '__fixtures__', 'after_complex.json');
    const actual = genDiff(path1, path2, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> plain structure', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before_complex.yml');
    const path2 = path.join(__dirname, '__fixtures__', 'after_complex.yml');
    const actual = genDiff(path1, path2, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> plain structure', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before_complex.ini');
    const path2 = path.join(__dirname, '__fixtures__', 'after_complex.ini');
    const actual = genDiff(path1, path2, { format: 'plain' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_plain_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });
});

describe('Simle Tests -> JSON', () => {
  it('#gen-diff JSON -> JSON', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.json');
    const path2 = path.join(__dirname, '__fixtures__', 'after.json');
    const actual = genDiff(path1, path2, { format: 'json' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> JSON', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.yml');
    const path2 = path.join(__dirname, '__fixtures__', 'after.yml');
    const actual = genDiff(path1, path2, { format: 'json' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> JSON', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before.ini');
    const path2 = path.join(__dirname, '__fixtures__', 'after.ini');
    const actual = genDiff(path1, path2, { format: 'json' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });
});

describe('Complex Tests -> JSON', () => {
  it('#gen-diff JSON -> JSON', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before_complex.json');
    const path2 = path.join(__dirname, '__fixtures__', 'after_complex.json');
    const actual = genDiff(path1, path2, { format: 'json' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff YAML -> JSON', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before_complex.yml');
    const path2 = path.join(__dirname, '__fixtures__', 'after_complex.yml');
    const actual = genDiff(path1, path2, { format: 'json' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });

  it('#gen-diff INI -> JSON', () => {
    const path1 = path.join(__dirname, '__fixtures__', 'before_complex.ini');
    const path2 = path.join(__dirname, '__fixtures__', 'after_complex.ini');
    const actual = genDiff(path1, path2, { format: 'json' });
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'expected_json_complex');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(actual).toEqual(expected);
  });
});
