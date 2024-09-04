// services/weatherService.ts
import { getBaseTime } from '../utils/timeUtils';

const API_KEY = 'n8uIBadsqMx4UqYvGKL7l7l2Gkut99sQyvUHXQJdNhOo0pQQRE0vwEgMMYsptCZ91a4L%2Fna8hWLVrGmNkOQS5w%3D%3D';

export const getWeatherData = async (date: string, nx: number, ny: number) => {
  const baseTime = getBaseTime(); // 동적으로 base_time 설정
  const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${date}&base_time=${baseTime}&nx=${nx}&ny=${ny}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.response && data.response.body && data.response.body.items) {
      return data.response.body.items.item;
    } else {
      throw new Error('API 응답에 필요한 데이터가 없습니다.');
    }
  } catch (error) {
    console.error('날씨 데이터를 가져오는 중 오류가 발생했습니다:', error);
    return []; // 에러 발생 시 빈 배열 반환
  }
};
