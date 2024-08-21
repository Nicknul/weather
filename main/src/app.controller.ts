import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  handleTestRequest() {
    console.log('메인 서버: 프론트로부터 요청을 받았습니다.');

    return { message: '메인 서버에서 응답을 전송합니다.' };
  }
}
