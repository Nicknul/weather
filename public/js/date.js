window.addEventListener('load', () => {
  /**
   * 문사 요소 불러오기
   */
  const hour = document.getElementById('hour-bundle');
  const today = document.getElementById('today-bundle');
  const tomorrow = document.getElementById('tomorrow-bundle');
  const DayAfterTomorrow = document.getElementById('day-after-tomorrow-bundle');
  const TwoDaysAfterTomorrow = document.getElementById('two-day-after-tomorrow-bundle');

  /**
   * 현재 날짜 추출
   */
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

  async function shortWeather() {
    let a = await fetch(url, { method: 'GET' });
    let b = await a.json();

    const data = b.response.body.items.item; // 단기예보 데이터

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
              today.appendChild(highest);
            } else if (categoryArr[j] === 'TMN') {
              let days = document.createElement('div');
              let lowest = document.createElement('div');

              days.textContent = '오늘';
              lowest.textContent = `${fcstValue}℃`;

              today.appendChild(days);
              today.appendChild(lowest);
            } else {
              /**
               * hour : 시간
               * hourly : 시간별 기온 묶음
               * temperature : 기온
               * img : 날씨 아이콘
               */
              let img = new Image();
              img.width = 48;
              img.height = 48;
              img.src = '../../storage/images/cloud_sun_sunny.png';
              img.alt = '구름 + 해';

              let a = fcstTime.slice(0, 2);
              let b = Number(a);

              let temperature = document.createElement('div');
              let hours = document.createElement('div');
              let hourly = document.createElement('div');

              hourly.className = 'hourly';
              hours.textContent = `${b}시`;
              temperature.textContent = `${fcstValue}℃`;

              hourly.appendChild(hours);
              hourly.appendChild(img);
              hourly.appendChild(temperature);
              hour.appendChild(hourly);
            }
          } else if (fcstDate === `${transformDate + 1}`) {
            if (categoryArr[j] === 'TMX') {
              let highest = document.createElement('div');
              highest.textContent = `${fcstValue}`;
              tomorrow.appendChild(highest);
            } else if (categoryArr[j] === 'TMN') {
              let days = document.createElement('div');
              let lowest = document.createElement('div');

              let itemYear = fcstDate.slice(0, 4);
              let itemMonth = fcstDate.slice(4, 6);
              let itemDay = fcstDate.slice(6, 8);

              let a = `${itemYear}-${itemMonth}-${itemDay}`;

              let b = new Date(a);
              let dayIndex = b.getDay();
              let dayArr = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
              let c = `${days} ${fcstTime} = ${categoryArr[j]} : ${fcstValue}`;
              // console.log(c);

              days.textContent = dayArr[dayIndex];
              lowest.textContent = `${fcstValue}℃`;

              tomorrow.appendChild(days);
              tomorrow.appendChild(lowest);
            }
          } else if (fcstDate === `${transformDate + 2}`) {
            if (categoryArr[j] === 'TMX') {
              let highest = document.createElement('div');
              highest.textContent = `${fcstValue}`;
              DayAfterTomorrow.appendChild(highest);
            } else if (categoryArr[j] === 'TMN') {
              let days = document.createElement('div');
              let lowest = document.createElement('div');

              let itemYear = fcstDate.slice(0, 4);
              let itemMonth = fcstDate.slice(4, 6);
              let itemDay = fcstDate.slice(6, 8);

              let a = `${itemYear}-${itemMonth}-${itemDay}`;

              let b = new Date(a);
              let dayIndex = b.getDay();
              let dayArr = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
              let c = `${days} ${fcstTime} = ${categoryArr[j]} : ${fcstValue}`;
              // console.log(c);

              days.textContent = dayArr[dayIndex];
              lowest.textContent = `${fcstValue}℃`;

              DayAfterTomorrow.appendChild(days);
              DayAfterTomorrow.appendChild(lowest);
            }
          } else if (fcstDate === `${transformDate + 3}`) {
            if (categoryArr[j] === 'TMX') {
              let highest = document.createElement('div');
              highest.textContent = `${fcstValue}`;
              TwoDaysAfterTomorrow.appendChild(highest);
            } else if (categoryArr[j] === 'TMN') {
              let days = document.createElement('div');
              let lowest = document.createElement('div');

              let itemYear = fcstDate.slice(0, 4);
              let itemMonth = fcstDate.slice(4, 6);
              let itemDay = fcstDate.slice(6, 8);

              let a = `${itemYear}-${itemMonth}-${itemDay}`;

              let b = new Date(a);
              let dayIndex = b.getDay();
              let dayArr = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
              let c = `${days} ${fcstTime} = ${categoryArr[j]} : ${fcstValue}`;
              // console.log(c);

              days.textContent = dayArr[dayIndex];
              lowest.textContent = `${fcstValue}℃`;

              TwoDaysAfterTomorrow.appendChild(days);
              TwoDaysAfterTomorrow.appendChild(lowest);
            }
          }
        }
      }
    }
  }
  shortWeather();
});
