const fs = require('fs');

let data = fs.readFileSync('./utf-8.csv', 'utf-8');

// enter 공백 없애기
let splitData = data.split('\r\n');
