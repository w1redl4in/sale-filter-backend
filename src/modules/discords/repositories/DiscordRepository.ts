import { Discord } from '../domain/discord';

export interface DiscordRepository {
  create(bot: Discord): Promise<void>;
  listAllDiscords(): Discord[];
  findById(id: string): Discord | undefined;
}
