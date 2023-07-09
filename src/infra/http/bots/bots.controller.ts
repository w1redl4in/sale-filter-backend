import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateBotDto } from './dto/create-bot.dto';
import { ListBotsUseCase } from 'src/modules/bots/useCases/ListBots';
import { CreateBotUseCase } from 'src/modules/bots/useCases/CreateBot';

@Controller('bots')
export class BotsController {
  constructor(
    private listAllBotsUseCase: ListBotsUseCase,
    private createBotUseCase: CreateBotUseCase,
  ) {}

  @Post()
  create(@Body() createBotDto: CreateBotDto) {
    return this.createBotUseCase.execute(createBotDto);
  }

  @Get()
  async findAll() {
    return this.listAllBotsUseCase.execute();
  }
}
