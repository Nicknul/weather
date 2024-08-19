import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express'; // 여기가 수정된 부분입니다.

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  handleTestRequest(@Res() res: Response) {
    console.log('메인 서버: 프론트로부터 요청을 받았습니다.');

    // 요청이 정상적으로 처리되었음을 알리는 응답
    return res
      .status(200)
      .json({ message: '메인 서버에서 응답을 전송합니다.' });
  }
}
