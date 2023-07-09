import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateDiscordDto } from './dto/create-discord.dto';
import { CreateDiscordUseCase } from 'src/modules/discords/useCases/CreateDiscord';
import { ListDiscordsUseCase } from 'src/modules/discords/useCases/ListDiscords';

@Controller('discords')
export class DiscordsController {
  constructor(
    private createDiscordUseCase: CreateDiscordUseCase,
    private listAllDiscordUseCase: ListDiscordsUseCase,
  ) {}

  @Post()
  create(@Body() createDiscordDto: CreateDiscordDto) {
    return this.createDiscordUseCase.execute(createDiscordDto);
  }

  @Get()
  findAll() {
    return this.listAllDiscordUseCase.execute();
  }
}
