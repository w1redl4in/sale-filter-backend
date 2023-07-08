import { Bot } from '../domain/bot';

export interface BotRepository {
  create(bot: Bot): Promise<void>;
  listAllBots(): Bot[];
  findByChannelId(channelId: string): Bot | undefined;
}
