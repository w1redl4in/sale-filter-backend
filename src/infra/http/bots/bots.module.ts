import { Module } from '@nestjs/common';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { BotsService } from './bots.service';
import { BotsController } from './bots.controller';
import { InMemoryBotRepository } from 'src/modules/bots/useCases/in-memory/InMemoryBotRepository';
import { ListBotsUseCase } from 'src/modules/bots/useCases/ListBots';
import { BotRepository } from 'src/modules/bots/repositories/BotRepository';
import { BotTypeOrmRepository } from 'src/modules/bots/repositories/BotTypeOrmRepository';
import { CreateBotUseCase } from 'src/modules/bots/useCases/CreateBot';
import { BotEntity } from 'src/infra/db/typeorm/Bot.entity';
import { ValidateIfBotAlreadyExistsUseCase } from 'src/modules/bots/useCases/ValidateIfBotAlreadyExists';

@Module({
  imports: [TypeOrmModule.forFeature([BotEntity])],
  controllers: [BotsController],
  providers: [
    BotsService,
    {
      provide: ValidateIfBotAlreadyExistsUseCase,
      useClass: ValidateIfBotAlreadyExistsUseCase,
    },
    {
      provide: InMemoryBotRepository,
      useClass: InMemoryBotRepository,
    },
    {
      provide: BotTypeOrmRepository,
      useFactory: (dataSource: DataSource) =>
        new BotTypeOrmRepository(dataSource.getRepository(BotEntity)),
      inject: [getDataSourceToken()],
    },
    {
      provide: ValidateIfBotAlreadyExistsUseCase,
      useFactory: (botRepository: BotRepository) =>
        new ValidateIfBotAlreadyExistsUseCase(botRepository),
      inject: [BotTypeOrmRepository],
    },
    {
      provide: ListBotsUseCase,
      useFactory: (botRepository: BotRepository) =>
        new ListBotsUseCase(botRepository),
      inject: [BotTypeOrmRepository],
    },
    {
      provide: CreateBotUseCase,
      useFactory: (
        botRepository: BotRepository,
        validateIfBotAlreadyExistsUseCase: ValidateIfBotAlreadyExistsUseCase,
      ) =>
        new CreateBotUseCase(botRepository, validateIfBotAlreadyExistsUseCase),
      inject: [BotTypeOrmRepository, ValidateIfBotAlreadyExistsUseCase],
    },
  ],
})
export class BotsModule {}
