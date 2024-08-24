import { Module } from '@nestjs/common';
import { WeatherController } from './app/weather.controller';
import { ZoneController } from './app/zone.controller';

@Module({
  imports: [],
  controllers: [WeatherController, ZoneController],
  providers: [],
})
export class AppModule {}
