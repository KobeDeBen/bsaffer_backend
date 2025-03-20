import { Controller, Get } from '@nestjs/common';
import { TempServiceService } from 'src/temp-service/temp-service.service';

@Controller('temp')
export class TempController {
    constructor(private readonly tempService: TempServiceService) {}

    @Get()
    async getData() {
      return await this.tempService.getData();
    }
}

