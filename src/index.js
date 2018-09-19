import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import parser from './parsers/parsers';

const getExtension = pathToFile => path.extname(`${pathToFile}`).replace(/\./g, '');

const genDiff = (path1, path2) => {
  const fileExt = getExtension(path1);
  const data1 = parser(fileExt)(fs.readFileSync(path1, 'utf-8'));
  const data2 = parser(fileExt)(fs.readFileSync(path2, 'utf-8'));
  const allKeys = _.union(Object.keys(data1), Object.keys(data2));
  const result = allKeys.reduce((acc, key) => {
    if (!_.has(data2, key)) {
      return `${acc}  - ${key}: ${data1[key]}\n`;
    }
    if (!_.has(data1, key)) {
      return `${acc}  + ${key}: ${data2[key]}\n`;
    }
    if (data1[key] !== data2[key]) {
      return `${acc}  + ${key}: ${data2[key]}\n  - ${key}: ${data1[key]}\n`;
    }
    return `${acc}    ${key}: ${data1[key]}\n`;
  }, '');
  return `{\n${result}}`;
};

const file1 = 'src/before.json';
const file2 = 'src/after.json';

console.log(genDiff(file1, file2));

export default genDiff;
