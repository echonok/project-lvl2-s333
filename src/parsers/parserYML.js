import yaml from 'js-yaml';

export default objectForParcing => yaml.safeLoad(objectForParcing);