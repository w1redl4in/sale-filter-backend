import { DiscordEntity } from 'src/infra/db/typeorm/Discord.entity';

export interface DiscordRepository {
  create(bot: DiscordEntity): Promise<void>;
  listAllDiscords(): Promise<DiscordEntity[]>;
  findById(id: string): Promise<DiscordEntity | undefined>;
}
