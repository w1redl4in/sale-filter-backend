import { BotRepository } from '../repositories/BotRepository';

export class ListBotsUseCase {
  constructor(private botRepository: BotRepository) {}

  async execute() {
    return await this.botRepository.listAllBots();
  }
}
