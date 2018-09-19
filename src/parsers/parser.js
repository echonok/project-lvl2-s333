import json from './parserJSON';
import yml from './parserYML';

const parsers = { json, yml };

export default extension => parsers[extension];
