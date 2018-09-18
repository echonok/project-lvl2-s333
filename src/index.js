import fs from 'fs';
import _ from 'lodash';

const compareValues = (value1, value2) => {
  if (value1 === value2) {
    return {
      changes: ' ',
      value: value1,
    };
  }
  if (value1 === undefined) {
    return {
      changes: '+',
      value: value2,
    };
  }
  if (value2 === undefined) {
    return {
      changes: '-',
      value: value1,
    };
  }
  return {
    changes: '-+',
    value: [value1, value2],
  };
};

const complexArrayToSimpleArray = (someArray) => {
  const finalArray = someArray.reduce((acc, record) => {
    if (typeof record.value === 'object') {
      acc.push({ name: record.name, changes: '+', value: record.value[0] });
      acc.push({ name: record.name, changes: '-', value: record.value[1] });
    } else {
      acc.push(record);
    }
    return acc;
  }, []);
  return finalArray;
};

const arrayToString = (someArray) => {
  console.log('{');
  someArray.forEach((item) => {
    console.log(`  ${item.changes} ${item.name}: ${item.value}`);
  });
  console.log('}');
};

const genDiff = (path1, path2) => {
  const data1 = JSON.parse(fs.readFileSync(path1, 'utf-8'));
  const data2 = JSON.parse(fs.readFileSync(path2, 'utf-8'));
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const allKeys = _.union(keys1, keys2).sort();
  const result = allKeys.reduce((acc, key) => {
    const { changes, value } = compareValues(data1[key], data2[key]);
    acc.push({ name: key, changes, value });
    return acc;
  }, []);
  arrayToString(complexArrayToSimpleArray(result));
};

export default genDiff;
