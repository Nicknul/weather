const fs = require('fs');

let data = fs.readFileSync('./utf-8.csv', 'utf-8');

// enter 공백 없애기
let splitData = data.split('\r\n');
// obj의 key가 될 data 추출
let title = splitData[0].split(',');

// for문을 통해 title를 제외한 나머지 값 나타나게 하기
for (let i = 1; i < splitData.length; i++) {
  // ,(쉼표) 제거
  let a = splitData[i].split(',');
  // console.log(a);
  for (let j = 0; j < title.length; j++) {
    // console.log(splitData[j]);
  }
}
