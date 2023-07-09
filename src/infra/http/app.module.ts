import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotsModule } from './bots/bots.module';
import { DiscordsModule } from './discords/discords.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../db/config';

@Module({
  imports: [BotsModule, DiscordsModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
