import inip from 'ini';
import yaml from 'js-yaml';

const json = objectForParcing => JSON.parse(objectForParcing);
const yml = objectForParcing => yaml.safeLoad(objectForParcing);
const ini = objectForParcing => inip.parse(objectForParcing);
const parsers = { json, yml, ini };

export default extension => parsers[extension];
