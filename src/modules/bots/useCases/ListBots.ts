import { Bot } from '../domain/bot';
import { BotRepository } from '../repositories/BotRepository';

export class ListBotsUseCase {
  constructor(private botRepository: BotRepository) {}

  async execute(): Promise<Bot[]> {
    return await this.botRepository.listAllBots();
  }
}
