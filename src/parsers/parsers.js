import ini from 'ini';
import yaml from 'js-yaml';

const parsers = { parserJSON, parserYML, parserINI };

const parserJSON = objectForParcing => JSON.parse(objectForParcing);
const parserYML = objectForParcing => yaml.safeLoad(objectForParcing);
const parserINI = objectForParcing => ini.parse(objectForParcing);

export default extension => parsers[extension];
