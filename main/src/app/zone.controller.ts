// src/app/zone.controller.ts

import { Controller, Get } from '@nestjs/common';

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
}
