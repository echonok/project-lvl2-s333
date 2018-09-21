import _ from 'lodash';

const tabSymbol = '  ';

const stringify = (value, repeater) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }

  const firstSpace = tabSymbol.repeat(repeater * 2);

  const keys = _.keys(value).map(key => `${firstSpace}${key}: ${stringify(value[key], repeater + 1)}`);

  return `{\n${_.flatten(keys).join('\n')}\n${tabSymbol.repeat((repeater - 1) * 2)}}`;
};

const valueToString = (key, value, repeater) => `${key}: ${stringify(value, repeater + 1)}`;

const renderAstAsTree = (differences, repeater = 1) => {
  const firstSpace = tabSymbol.repeat(repeater * 2 - 1);
  const indentForUnchanged = tabSymbol.repeat(repeater * 2);

  const arr = differences.map((element) => {
    const {
      name, type, value1, value2, children,
    } = element;

    switch (type) {
      case 'object':
        return `${indentForUnchanged}${name}: ${renderAstAsTree(children, repeater + 1)}`;
      case 'deleted':
        return `${firstSpace}- ${valueToString(name, value1, repeater)}`;
      case 'added':
        return `${firstSpace}+ ${valueToString(name, value2, repeater)}`;
      case 'unchanged':
        return `${indentForUnchanged}${valueToString(name, value1, repeater)}`;
      case 'changed':
        return [`${firstSpace}- ${valueToString(name, value1, repeater)}`, `${firstSpace}+ ${valueToString(name, value2, repeater)}`];
      default:
        throw new Error();
    }
  });

  return `{\n${_.flatten(arr).join('\n')}\n${tabSymbol.repeat((repeater - 1) * 2)}}`;
};

export default renderAstAsTree;
