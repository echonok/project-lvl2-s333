import ini from 'ini';
import yaml from 'js-yaml';

const parsers = { 
	json: JSON.parse(objectForParcing), 
	yml: yaml.safeLoad(objectForParcing),
	ini: ini.parse(objectForParcing };

export default extension => parsers[extension];
