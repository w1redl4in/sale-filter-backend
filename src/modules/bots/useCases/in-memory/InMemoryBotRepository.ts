import { Bot } from '../../domain/bot';
import { BotRepository } from '../../repositories/BotRepository';

export class InMemoryBotRepository implements BotRepository {
  constructor(public items: Bot[] = []) {}
  async findByChannelId(channelId: string): Promise<Bot | undefined> {
    return this.items.find((bot) => bot.channelId === channelId);
  }
  async create(bot: Bot): Promise<void> {
    this.items.push(bot);
  }

  async listAllBots(): Promise<Bot[]> {
    return this.items;
  }
}
