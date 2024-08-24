// src/app/zone.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('zone')
export class ZoneController {
  @Get('keys')
  async fetchZoneKeys() {
    try {
      const response = await fetch('http://localhost:8080/zone-keys', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`Python 서버 응답 실패. 상태 코드: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('메인 서버: Python 서버 요청 중 에러 발생:', error);
      throw new Error('메인 서버: Python 서버 요청 실패');
    }
  }

  @Post('select')
  async handleZoneSelection(@Body() body: { zone: string }) {
    console.log('메인 서버: 프론트에서 받은 지역 코드:', body.zone);

    try {
      // 데이터베이스 서버에 지역 코드를 전달합니다.
      const response = await fetch('http://localhost:8080/db/zone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ zone: body.zone }),
      });

      if (!response.ok) {
        throw new Error(
          `데이터베이스 서버 응답 실패. 상태 코드: ${response.status}`,
        );
      }

      const result = await response.json();
      console.log(
        '메인 서버: 데이터베이스 서버로부터 받은 응답:',
        result.message,
      );

      // 데이터베이스 서버로부터 받은 응답을 프론트로 전달합니다.
      return { message: result.message };
    } catch (error) {
      console.error('메인 서버: 데이터베이스 서버 요청 중 에러 발생:', error);
      throw new Error('메인 서버: 데이터베이스 서버 요청 실패');
    }
  }
}
