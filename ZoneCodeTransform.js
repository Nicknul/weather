const fs = require('fs');

const data = fs.readFileSync('./ZoneCode.csv', 'utf-8');
const splitData = data.split('\r\n');
const obj = {};

for (let i = 0; i < splitData.length; i++) {
  let keys = splitData[i].split(',');
  obj[keys[0]] = keys[1];
}

const change = JSON.stringify(obj, null, 2);
const createFile = fs.writeFileSync('./ZoneCode.json', change, 'utf-8');
console.log('파일 생성 완료', createFile);
