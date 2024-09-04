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

  let hour = now.getHours().toString();
  let minutes = now.getMinutes().toString();

  if (hour.length < 2) {
    hour = '0' + hour;
  }
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  const now_time = Number(hour + minutes);
  console.log('현재 시각:', now_time);

  const processDate = year + month + date;

  /**
   * Base_time : 0200, 0500, 0800, 1100, 1400, 1700, 2000, 2300 (1일 8회)
   * API 제공 시간(~이후) : 02:10, 05:10, 08:10, 11:10, 14:10, 17:10, 20:10, 23:10
   */
  let base_time = '';

  if (now_time >= 210 && now_time <= 510) {
    base_time = '0200';
  } else if (now_time > 510 && now_time <= 810) {
    base_time = '0500';
  } else if (now_time > 810 && now_time <= 1110) {
    base_time = '0800';
  } else if (now_time > 1110 && now_time <= 1410) {
    base_time = '1100';
  } else if (now_time > 1410 && now_time <= 1710) {
    base_time = '1400';
  } else if (now_time > 1710 && now_time <= 2010) {
    base_time = '1700';
  } else if (now_time > 2010 && now_time <= 2310) {
    base_time = '2000';
  } else {
    base_time = '2300';
  }

  console.log('반환할 base_time:', base_time);

  const API_KEY = 'n8uIBadsqMx4UqYvGKL7l7l2Gkut99sQyvUHXQJdNhOo0pQQRE0vwEgMMYsptCZ91a4L%2Fna8hWLVrGmNkOQS5w%3D%3D';
  const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${processDate}&base_time=${base_time}&nx=67&ny=100`;

  console.log(url);
});
