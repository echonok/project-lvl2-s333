import ini from 'ini';
import yaml from 'js-yaml';

const parserJSON = objectForParcing => JSON.parse(objectForParcing);
const parserYML = objectForParcing => yaml.safeLoad(objectForParcing);
const parserINI = objectForParcing => ini.parse(objectForParcing);
const parsers = { parserJSON, parserYML, parserINI };

export default extension => parsers[extension];
