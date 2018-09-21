import _ from 'lodash';

const renderDifferences = (differences, parentName = '') => {

  const arr = differences.map(key => {

    const { name, type, value1, value2, children } = key;

    switch (type) {
      case 'object':
        return renderDifferences(children, `${parentName}${name}.`);
      case 'added':
        return `Property ${parentName}${name} was added with value: ${value2}`;
      case 'deleted':
        return `Property ${parentName}${name} was removed`;
      case 'changed':
        return `Property ${parentName}${name} was updated. From ${value1} to ${value2}`;
      default:
        return;
    }
  });
  return `${_.flatten(_.filter(arr, function (sub) { return sub; })).join('\n')}`;
};

export default renderDifferences;
