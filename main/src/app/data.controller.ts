// src/app/data.controller.ts

import { Controller, Get } from '@nestjs/common';

@Controller('data')
export class DataController {
  @Get('fetch-array')
  async fetchArrayFromPython() {
    const response = await fetch('http://localhost:8080/zone-keys', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
}
