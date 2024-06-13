const fs = require('fs');

let data = fs.readFileSync('./utf-8.csv', 'utf-8');

// enter 공백 없애기
let splitData = data.split('\r\n');
// obj의 key data 뽑기
let title = splitData[0].split(',');

for (let i = 1; i < splitData.length; i++) {
  // console.log(splitData[i]);
}
