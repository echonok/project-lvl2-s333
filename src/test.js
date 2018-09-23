import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import parseFile from './parsers';
import renderDiff from './formatters';

const getExtension = pathToFile => path.extname(`${pathToFile}`).replace(/\./g, '');

const getAllKeys = (data1, data2) => _.union(_.keys(data1), _.keys(data2));

const compareTwoData = (data1, data2) => getAllKeys(data1, data2).map((key) => {
  const value1 = data1[key];
  const value2 = data2[key];

  if (_.isObject(value1) && _.isObject(value2)) {
    return { name: key, type: 'object', children: compareTwoData(value1, value2) };
  }
  if (!_.has(data1, key)) {
    return { name: key, type: 'added', value2 };
  }
  if (!_.has(data2, key)) {
    return { name: key, type: 'deleted', value1 };
  }
  if (value1 === value2) {
    return { name: key, type: 'unchanged', value1 };
  }
  return {
    name: key, type: 'changed', value1, value2,
  };
});

const genDiff = (path1, path2, format = 'structure') => {
  const fileExt = getExtension(path1);
  const file1 = fs.readFileSync(path1, 'utf-8');
  const file2 = fs.readFileSync(path2, 'utf-8');
  const data1 = parseFile(fileExt, file1);
  const data2 = parseFile(fileExt, file2);
  const differences = compareTwoData(data1, data2);
  return renderDiff(format)(differences);
};

export default genDiff;


const file1 = 'src/before_complex.json';
const file2 = 'src/after_complex.json';
//console.log(genDiff(file1, file2, { format: 'default' }));

console.log('');

const file3 = 'src/before.json';
const file4 = 'src/after.json';
console.log(genDiff(file3, file4));
