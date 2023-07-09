import { BotEntity } from 'src/infra/db/typeorm/Bot.entity';
import { Bot } from '../domain/bot';

export interface BotRepository {
  create(bot: BotEntity): Promise<void>;
  listAllBots(): Promise<BotEntity[]>;
  findByChannelId(channelId: string): Promise<BotEntity | null>;
}
