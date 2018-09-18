import _ from 'lodash';
import fs from 'fs';

console.log('test');

const mainFunc = (path1, path2) => {
	const data1 = JSON.parse(fs.readFileSync(path1, 'utf-8'));
	const data2 = JSON.parse(fs.readFileSync(path2, 'utf-8'));
	console.log(data1);
	console.log(data2);
};

const path1 = '__tests__/__fixtures__/after.json';
const path2 = '__tests__/__fixtures__/before.json';
mainFunc(path1, path2);
