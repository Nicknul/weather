window.addEventListener('load', () => {
  const sky = document.getElementById('sky');

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

  const sky_date = async () => {
    let a = await fetch(url, { method: 'GET' });
    let b = await a.json();

    const api_data = b.response.body.items.item;

    for (let i = 0; i < api_data.length; i++) {
      const category = api_data[i].category;
      const fcstValue = api_data[i].fcstValue;
      const sky_arr = ['맑음', '구름 조금', '구름 많음', '흐림'];
      if (category === 'SKY') {
        let index = Number(fcstValue) - 1;
        if (sky_arr[index] === '맑음') {
          const img = new Image();
          img.src = '../../storage/images/hot_sun.png';
          img.alt = '맑음';

          img.width = 48;
          img.height = 48;
          sky.appendChild(img);
        }
      }
    }
  };
  sky_date();
});
