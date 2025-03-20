import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemperatureController } from './sensor/temperature.controller';
import { TemperatureService } from './services/temperature.service'
import { HumidityService } from './services/humidity.service';
import { TippingsService } from './services/tippings.service';
import { PressureService } from './services/pressure.service';
import { VoltageService } from './services/voltage.service';
import { PressureController } from './sensor/pressure.controller';
import { HumidityController } from './sensor/humidity.controller';
import { TippingsController } from './sensor/tippings.controller';
import { VoltageController } from './sensor/voltage.controller';


@Module({
  imports: [],
  controllers: [AppController, TemperatureController, PressureController, HumidityController, TippingsController, VoltageController],
  providers: [AppService, TemperatureService, HumidityService, TippingsService, PressureService, VoltageService],
})
export class AppModule {}
