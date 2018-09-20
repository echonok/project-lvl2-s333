import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import parser from './parsers';

const getExtension = pathToFile => path.extname(`${pathToFile}`).replace(/\./g, '');

const compareTwoData = (obj1, obj2) => {
  if (obj1 === null || obj2 === null) {
    return;
  }  
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));

  const compareValues = (value1, value2) => {
    if (typeof value1 === 'object' && typeof value2 === 'object') {
      return {
        type: 'unchanged',
        data: compareTwoData(value1, value2),
      };
    }

    if (value1 === value2) {
      return {
        type: 'unchanged',
        data: value1,
      };
    }

    if (typeof value1 === 'object' && value2 === undefined) {
      return {
        type: 'deleted',
        data: compareTwoData(value1, value1),
      };
    }
    if (value1 === undefined && typeof value2 === 'object') {
      return {
        type: 'created',
        data: compareTwoData(value2, value2),
      };
    }

    if (typeof value1 === 'object' && value2 !== undefined) {
      return {
        type: 'changedOld',
        data: [compareTwoData(value1, value1), value2],
      };
    }
    if (value1 !== undefined && typeof value2 === 'object') {
      return {
        type: 'changedNew',
        data: [value1, compareTwoData(value2, value2)],
      };
    }

    if (value1 === undefined) {
      return {
        type: 'created',
        data: value2,
      };
    }
    if (value2 === undefined) {
      return {
        type: 'deleted',
        data: value1,
      };
    }
    return {
      type: 'changed',
      data: [value1, value2],
    };
  };

  return keys.reduce((acc, key) => {
    const { type, data } = compareValues(obj1[key], obj2[key]);
    acc.push({ name: key, type, data });
    return acc;
  }, []);
};


const stringify = (differences, repeater = 1) => {
  const result = differences.reduce((acc, key) => {
    if (typeof key.data === 'object') {
      switch (key.type) {
        case 'unchanged':
          return [...acc, `${'  '.repeat(repeater)}  ${key.name}: ${stringify(key.data, repeater + 2)}`];
        case 'changed':
          return [...acc, [`${'  '.repeat(repeater)}- ${key.name}: ${key.data[0]}`, `${'  '.repeat(repeater)}+ ${key.name}: ${key.data[1]}`]];
        case 'changedOld':
          return [...acc, [`${'  '.repeat(repeater)}- ${key.name}: ${stringify(key.data[0], repeater + 2)}`, `${'  '.repeat(repeater)}+ ${key.name}: ${key.data[1]}`]];
        case 'changedNew':
          return [...acc, [`${'  '.repeat(repeater)}- ${key.name}: ${key.data[0]}`, `${'  '.repeat(repeater)}+ ${key.name}: ${stringify(key.data[1], repeater + 2)}`]];
        case 'created':
          return [...acc, `${'  '.repeat(repeater)}+ ${key.name}: ${stringify(key.data, repeater + 2)}`];
        case 'deleted':
          return [...acc, `${'  '.repeat(repeater)}- ${key.name}: ${stringify(key.data, repeater + 2)}`];
        default:
          return acc;
      }
    }
    switch (key.type) {
      case 'unchanged':
        return [...acc, `${'  '.repeat(repeater)}  ${key.name}: ${key.data}`];
      case 'changed':
        return [...acc, [`${'  '.repeat(repeater)}- ${key.name}: ${key.data[0]}`, `${'  '.repeat(repeater)}+ ${key.name}: ${key.data[1]}`]];
      case 'created':
        return [...acc, `${'  '.repeat(repeater)}+ ${key.name}: ${key.data}`];
      case 'deleted':
        return [...acc, `${'  '.repeat(repeater)}- ${key.name}: ${key.data}`];
      default:
        return acc;
    }
  }, []);
  const bracketSpace = repeater === 1 ? '' : ' ';
  return `{\n${_.flatten(result).join('\n')}\n${bracketSpace.repeat((repeater * 2) - 2)}}`;
};

const genDiff = (path1, path2) => {
  const fileExt = getExtension(path1);
  const file1 = fs.readFileSync(path1, 'utf-8');
  const file2 = fs.readFileSync(path2, 'utf-8');
  const data1 = parser(fileExt, file1);
  const data2 = parser(fileExt, file2);

  return (stringify(compareTwoData(data1, data2)));
};

export default genDiff;
