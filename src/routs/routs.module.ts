import { Module } from '@nestjs/common';
import { RoutsService } from './routs.service';
import { RoutsController } from './routs.controller';

@Module({
  providers: [RoutsService],
  controllers: [RoutsController]
})
export class RoutsModule {}
