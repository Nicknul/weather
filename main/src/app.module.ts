import { Module } from '@nestjs/common';
import { WeatherController } from './app/weather.controller';
import { DataController } from './app/data.controller';

@Module({
  imports: [],
  controllers: [WeatherController, DataController],
  providers: [],
})
export class AppModule {}
