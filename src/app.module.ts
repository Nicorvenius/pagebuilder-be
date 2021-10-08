import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutsModule } from './routs/routs.module';
import { RoutsController } from './routs/routs.controller';

@Module({
  imports: [RoutsModule],
  controllers: [AppController, RoutsController],
  providers: [AppService],
})
export class AppModule {}
