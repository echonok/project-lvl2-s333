import json from './parserJSON';
import yml from './parserYML';
import ini from './parserINI';

const parsers = { json, yml, ini };

export default extension => parsers[extension];
