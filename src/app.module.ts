import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorController } from './sensor/sensor.controller';
import { TempServiceService } from './temp-service/temp-service.service';

@Module({
  imports: [],
  controllers: [AppController, SensorController],
  providers: [AppService, TempServiceService],
})
export class AppModule {}
