import fs from 'fs';

const mainFunc = (path1, path2) => {
  const data1 = JSON.parse(fs.readFileSync(path1, 'utf-8'));
  const data2 = JSON.parse(fs.readFileSync(path2, 'utf-8'));
  console.log(data1);
  console.log(data2);
};

export default mainFunc;
