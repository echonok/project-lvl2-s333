import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import parser from './parsers';

const getExtension = pathToFile => path.extname(`${pathToFile}`).replace(/\./g, '');

const compareTwoData = (data1, data2, repeater = 1) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const result = keys.reduce((acc, key) => {
    if (data1[key] instanceof Object && data2[key] instanceof Object) {
      if (!_.has(data2, key)) {
        return [...acc, `${'  '.repeat(repeater)}- ${key}: ${compareTwoData(data1[key], data2[key], repeater + 2)}`];
      }
      if (!_.has(data1, key)) {
        return [...acc, `${'  '.repeat(repeater)}+ ${key}: ${compareTwoData(data1[key], data2[key], repeater + 2)}`];
      }
      return [...acc, `${'  '.repeat(repeater)}  ${key}: ${compareTwoData(data1[key], data2[key], repeater + 2)}`];
    }

    if (data1[key] instanceof Object && _.has(data2, key)) {
      return [...acc, [`${'  '.repeat(repeater)}- ${key}: ${compareTwoData(data1[key], data1[key], repeater + 2)}`, `${'  '.repeat(repeater)}+ ${key}: ${data2[key]}`]];
    }

    if (data2[key] instanceof Object && _.has(data1, key)) {
      return [...acc, [`${'  '.repeat(repeater)}- ${key}: ${data1[key]}`, `${'  '.repeat(repeater)}+ ${key}: ${compareTwoData(data2[key], data2[key], repeater + 2)}`]];
    }

    if (data1[key] instanceof Object && !_.has(data2, key)) {
      return [...acc, [`${'  '.repeat(repeater)}- ${key}: ${compareTwoData(data1[key], data1[key], repeater + 2)}`]];
    }

    if (data2[key] instanceof Object && !_.has(data1, key)) {
      return [...acc, [`${'  '.repeat(repeater)}+ ${key}: ${compareTwoData(data2[key], data2[key], repeater + 2)}`]];
    }

    if (!_.has(data2, key)) {
      return [...acc, `${'  '.repeat(repeater)}- ${key}: ${data1[key]}`];
    }
    if (!_.has(data1, key)) {
      return [...acc, `${'  '.repeat(repeater)}+ ${key}: ${data2[key]}`];
    }
    if (data1[key] !== data2[key]) {
      return [...acc, [`${'  '.repeat(repeater)}- ${key}: ${data1[key]}`, `${'  '.repeat(repeater)}+ ${key}: ${data2[key]}`]];
    }

    return [...acc, `${'  '.repeat(repeater)}  ${key}: ${data1[key]}`];
  }, []);
  const bracketSpace = repeater === 1 ? '' : ' ';
  return `{\n${_.flatten(result).join('\n')}\n${bracketSpace.repeat(repeater + 1)}}`;
};

const genDiff = (path1, path2) => {
  const fileExt = getExtension(path1);
  const file1 = fs.readFileSync(path1, 'utf-8');
  const file2 = fs.readFileSync(path2, 'utf-8');
  const data1 = parser(fileExt, file1);
  const data2 = parser(fileExt, file2);
  return compareTwoData(data1, data2);
};

export default genDiff;
