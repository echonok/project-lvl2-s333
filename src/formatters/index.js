import structureFormatter from './structure';
import plainFormatter from './plain';
import jsonFormatter from './json';

const formatters = {
  structure: structureFormatter,
  plain: plainFormatter,
  json: jsonFormatter,
};

export default (format = 'structure') => {
  const formatter = formatters[format];
  if (formatter) {
    return formatter;
  }
  return formatters.structure;
};
