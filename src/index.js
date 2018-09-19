import fs from 'fs';
import _ from 'lodash';

const genDiff = (path1, path2) => {
  const data1 = JSON.parse(fs.readFileSync(path1, 'utf-8'));
  const data2 = JSON.parse(fs.readFileSync(path2, 'utf-8'));

  const resultFirstStep = Object.keys(data1).reduce((acc, key) => {
    if (_.has(data2, key)) {
      if (data1[key] !== data2[key]) {
        return `${acc}  + ${key}: ${data2[key]}\n  - ${key}: ${data1[key]}\n`;
      } else {
        return `${acc}    ${key}: ${data1[key]}\n`;
      }
    } else {
      return `${acc}  - ${key}: ${data1[key]}\n`;
    }
  }, '');

  const resultSecondStep = Object.keys(data2).reduce((acc, key) => {
    if (_.has(data1, key)) {
      return acc;
    } else {
      return `${acc}  + ${key}: ${data2[key]}\n`
    }
  }, resultFirstStep);

  return `{\n${resultSecondStep}}`;
};

export default genDiff;
