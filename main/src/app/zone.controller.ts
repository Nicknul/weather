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
      // 정상적으로 데이터를 받았다는 응답을 프론트로 반환
      return { message: '지역 코드를 정상적으로 받았습니다.' };
    } catch (error) {
      console.error('메인 서버: 지역 코드 처리 중 에러 발생:', error);
      throw new Error('지역 코드 처리 실패');
    }
  }
}
