// services/weatherService.ts
const API_KEY = 'n8uIBadsqMx4UqYvGKL7l7l2Gkut99sQyvUHXQJdNhOo0pQQRE0vwEgMMYsptCZ91a4L%2Fna8hWLVrGmNkOQS5w%3D%3D';

export const getWeatherData = async (date: string, nx: number, ny: number) => {
  const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${date}&base_time=0200&nx=${nx}&ny=${ny}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.response.body.items.item;
};
