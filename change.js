const fs = require('fs');
// csv 파일 읽어오기 (모듈이 아니기 때문에 readFile로 읽어와야 한다.)
let data = fs.readFileSync('./utf-8.csv', 'utf-8');

// enter 공백 없애기
let splitData = data.split('\r\n');
// obj의 key가 될 data 추출
let key = splitData[0].split(',');

let end = [];

// for문을 통해 key를 제외한 나머지 값 나타나게 하기
for (let i = 1; i < splitData.length; i++) {
  // key를 제외한 나머지 데이터에서 ,(쉼표) 제거
  let value = splitData[i].split(',');
  // 빈 객체 만들기
  let obj = {};
  //key.length 기준으로 반복문 돌리기
  for (let j = 0; j < key.length; j++) {
    // 빈 객체의 key === key[j] / value === value[j]
    obj[key[j]] = value[j];
  }
  // 데이터가 들어간 obj 객체를 end라는 빈 배열에 넣어줌
  end.push(obj);
  // console.log(obj);
}
// end의 데이터를 JSON 작성 방식으로 변환
let change = JSON.stringify(end, null, 2);

// 변환한 데이터를 토대로 json 파일 생성
let a = fs.writeFileSync('./city.json', change, 'utf-8');
console.log(a);
