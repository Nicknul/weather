window.addEventListener('load', () => {
  const now = new Date();

  let year = now.getFullYear();
  let month = (now.getMonth() + 1).toString();
  let date = now.getDate().toString();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (date.length < 2) {
    date = '0' + date;
  }

  const processDate = year + month + date;
  const transformDate = Number(processDate);

  const key = 'n8uIBadsqMx4UqYvGKL7l7l2Gkut99sQyvUHXQJdNhOo0pQQRE0vwEgMMYsptCZ91a4L%2Fna8hWLVrGmNkOQS5w%3D%3D';
  const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${key}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${processDate}&base_time=0200&nx=67&ny=100`;
  // console.log(url);

  const root = document.getElementById('root');

  async function shortWeather() {
    let a = await fetch(url, { method: 'GET' });
    let b = await a.json();

    const data = b.response.body.items.item; // 단기예보 데이터

    const set = document.createElement('div');
    const todaySets = document.createElement('div');
    const hourlySets = document.createElement('div');

    set.id = 'set';
    todaySets.id = 'today';
    hourlySets.id = 'hourly';

    set.appendChild(hourlySets);
    set.appendChild(todaySets);
    root.appendChild(set);

    for (let i = 0; i < data.length; i++) {
      let category = data[i].category;
      let fcstDate = data[i].fcstDate;
      let fcstValue = data[i].fcstValue;
      let fcstTime = data[i].fcstTime;

      /**
       * ? 명세서
       * TMP : 1시간별 기온
       * TMX : 최고 기온
       * TMN : 최저 기온
       * category : 분류
       * fcstDate : 날짜
       * fcstTime : 일시
       * fcstValue : 분류 값
       */
      let categoryArr = ['TMP', 'TMX', 'TMN'];

      for (let j = 0; j <= 3; j++) {
        if (category === categoryArr[j]) {
          if (fcstDate === processDate) {
            if (categoryArr[j] === 'TMX') {
              let highest = document.createElement('div');
              highest.textContent = `${fcstValue}`;
              todaySets.appendChild(highest);
            } else if (categoryArr[j] === 'TMN') {
              let days = document.createElement('div');
              let lowest = document.createElement('div');

              days.textContent = '오늘';
              lowest.textContent = `${fcstValue}`;

              todaySets.appendChild(days);
              todaySets.appendChild(lowest);
            } else {
              let hourly = document.createElement('div');
              hourly.textContent = `${fcstValue}`;
              hourlySets.appendChild(hourly);
            }
          } else {
            let itemYear = fcstDate.slice(0, 4);
            let itemMonth = fcstDate.slice(4, 6);
            let itemDay = fcstDate.slice(6, 8);

            let a = `${itemYear}-${itemMonth}-${itemDay}`;

            let b = new Date(a);
            let dayIndex = b.getDay();
            let dayArr = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
            let days = dayArr[dayIndex];
            let c = `${days} ${fcstTime} = ${categoryArr[j]} : ${fcstValue}`;
            console.log(c);
          }
        }
      }
    }
  }
  shortWeather();
});
