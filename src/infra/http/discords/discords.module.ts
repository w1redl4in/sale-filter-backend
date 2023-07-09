import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';

import { DiscordsController } from './discords.controller';
import { DiscordEntity } from 'src/infra/db/typeorm/Discord.entity';
import { InMemoryDiscordRepository } from 'src/modules/discords/useCases/in-memory/inMemoryDiscordRepository';
import { DiscordTypeOrmRepository } from 'src/modules/discords/repositories/DiscordTypeOrmRepository';
import { CreateDiscordUseCase } from 'src/modules/discords/useCases/CreateDiscord';
import { ListDiscordsUseCase } from 'src/modules/discords/useCases/ListDiscords';

@Module({
  imports: [TypeOrmModule.forFeature([DiscordEntity])],
  controllers: [DiscordsController],
  providers: [
    {
      provide: InMemoryDiscordRepository,
      useClass: InMemoryDiscordRepository,
    },
    {
      provide: DiscordTypeOrmRepository,
      useFactory: (dataSource: DataSource) =>
        new DiscordTypeOrmRepository(dataSource.getRepository(DiscordEntity)),
      inject: [getDataSourceToken()],
    },
    {
      provide: CreateDiscordUseCase,
      useFactory: (discordRepository: DiscordTypeOrmRepository) =>
        new CreateDiscordUseCase(discordRepository),
      inject: [DiscordTypeOrmRepository],
    },
    {
      provide: ListDiscordsUseCase,
      useFactory: (discordRepository: DiscordTypeOrmRepository) =>
        new ListDiscordsUseCase(discordRepository),
      inject: [DiscordTypeOrmRepository],
    },
  ],
})
export class DiscordsModule {}
