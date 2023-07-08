import { Bot } from '../../domain/bot';
import { BotRepository } from '../../repositories/BotRepository';

export class InMemoryBotRepository implements BotRepository {
  constructor(public items: Bot[] = []) {}
  findByChannelId(channelId: string): Bot | undefined {
    return this.items.find((bot) => bot.channelId === channelId);
  }
  async create(bot: Bot): Promise<void> {
    this.items.push(bot);
  }

  listAllBots(): Bot[] {
    return this.items;
  }
}
