import { Controller, Post, Body } from '@nestjs/common';

@Controller('weather')
export class WeatherController {
  @Post()
  async handleWeatherRequest(@Body() body: { zone: string }) {
    console.log('메인 서버: 프론트로부터 날씨 요청을 받았습니다.');

    try {
      const response = await fetch('http://localhost:8080/db/zone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ zone: body.zone }), // zone 값을 전달
      });

      if (!response.ok) {
        throw new Error(
          `데이터베이스 서버 응답 실패. 상태 코드: ${response.status}`,
        );
      }

      const data = await response.json();
      console.log(
        '메인 서버: 데이터베이스 서버로부터 날씨 응답을 받았습니다.',
        data,
      );
      return data;
    } catch (error) {
      console.error('메인 서버: 데이터베이스 서버 요청 중 에러 발생:', error);
      throw new Error('메인 서버: 데이터베이스 서버 요청 실패');
    }
  }
}
