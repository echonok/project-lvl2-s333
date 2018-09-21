import _ from 'lodash';

const tabSymbol = '  ';

const stringify = (value, repeater = 1) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }

  const firstSpace = tabSymbol.repeat(repeater + 1);

  const keys = Object.keys(value).map(key => `${firstSpace}${key}: ${stringify(value[key], repeater + 2)}`);

  return `{\n${_.flatten(keys).join('\n')}\n${tabSymbol.repeat(repeater)}}`;
};

const valueToString = (key, value, tabsCount) => { `${key}: ${stringify(value, tabsCount)}`; };

const renderDifferences = (differences, repeater = 1) => {
  const firstSpace = tabSymbol.repeat(repeater);
  const arr = differences.map((element) => {
      const {
      name, type, value1, value2, children,
    } = element;

    switch (type) {
      case 'object':
        return `${firstSpace}  ${name}: ${renderDifferences(children, repeater + 2)}`;
      case 'unchanged':
        return `${firstSpace}  ${valueToString(name, value1, repeater + 2)}`;
      case 'added':
        return `${firstSpace}+ ${valueToString(name, value2, repeater + 1)}`;
      case 'deleted':
        return `${firstSpace}- ${valueToString(name, value1, repeater + 1)}`;
      case 'changed':
        return [
          `${firstSpace}- ${valueToString(name, value1, repeater + 1)}`,
          `${firstSpace}+ ${valueToString(name, value2, repeater + 1)}`,
        ];
      default:
        throw new Error();
    }
  });

  return `{\n${_.flatten(arr).join('\n')}\n${tabSymbol.repeat(repeater - 1)}}`;
};

export default renderDifferences;
