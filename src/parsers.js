import ini from 'ini';
import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yml: yaml.safeLoad,
  ini: ini.parse,
};

export default (extension, objectForParcing) => parsers[extension](objectForParcing);
