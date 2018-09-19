import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import parser from './parsers';

const getExtension = pathToFile => path.extname(`${pathToFile}`).replace(/\./g, '');

const genDiff = (path1, path2) => {
  const fileExt = getExtension(path1);
  const file1 = fs.readFileSync(path1, 'utf-8');
  const file2 = fs.readFileSync(path2, 'utf-8');
  const data1 = parser(fileExt, file1);
  const data2 = parser(fileExt, file2);
  const allKeys = _.union(Object.keys(data1), Object.keys(data2));
  const result = allKeys.reduce((acc, key) => {
    if (!_.has(data2, key)) {
      return _.flatten([...acc, `${acc}  - ${key}: ${data1[key]}`]);
    }
    if (!_.has(data1, key)) {
      return _.flatten([...acc, `${acc}  + ${key}: ${data2[key]}`]);
    }
    if (data1[key] !== data2[key]) {
      return _.flatten([...acc, [`${acc}  + ${key}: ${data2[key]}`, `  - ${key}: ${data1[key]}`]]);
    }
    return _.flatten([...acc, `${acc}    ${key}: ${data1[key]}`]);
  }, []);
  
  return `{\n${result.join('\n')}\n}`;
  //return `{\n${result}}`;
};

export default genDiff;
