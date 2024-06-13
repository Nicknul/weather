const fs = require('fs');

let data = fs.readFileSync('./utf-8.csv', 'utf-8');

// enter 공백 없애기
let splitData = data.split('\r\n');
// ,(쉼표) 제거하기
let title = splitData[0].split(',');
console.log(title);
