import { Module } from '@nestjs/common';
import { BotsService } from './bots.service';
import { BotsController } from './bots.controller';
import { InMemoryBotRepository } from 'src/modules/bots/useCases/in-memory/InMemoryBotRepository';
import { ListBotsUseCase } from 'src/modules/bots/useCases/ListBots';
import { BotRepository } from 'src/modules/bots/repositories/BotRepository';

@Module({
  controllers: [BotsController],
  providers: [
    BotsService,
    {
      provide: InMemoryBotRepository,
      useClass: InMemoryBotRepository,
    },
    {
      provide: ListBotsUseCase,
      useFactory: (botRepository: BotRepository) =>
        new ListBotsUseCase(botRepository),
      inject: [InMemoryBotRepository],
    },
  ],
})
export class BotsModule {}
