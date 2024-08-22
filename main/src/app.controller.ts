import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('weather')
  async handleTestRequest() {
    console.log('메인 서버: 프론트로부터 요청을 받았습니다.');

    try {
      const response = await fetch('http://localhost:8080/weather', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(
          `데이터베이스 서버 응답 실패. 상태 코드: ${response.status}`,
        );
      }

      const data = await response.json();
      console.log(
        '메인 서버: 데이터베이스 서버로부터 응답을 받았습니다.',
        data,
      );
      return data;
    } catch (error) {
      console.error('메인 서버: 데이터베이스 서버 요청 중 에러 발생:', error);
      throw new Error('메인 서버: 데이터베이스 서버 요청 실패');
    }
  }
}
