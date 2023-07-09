import { DiscordRepository } from '../repositories/DiscordRepository';

export class ListDiscordsUseCase {
  constructor(private discordRepository: DiscordRepository) {}
  async execute() {
    const discords = await this.discordRepository.listAllDiscords();
    return discords;
  }
}
