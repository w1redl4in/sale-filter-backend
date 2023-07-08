import { Discord } from '../../domain/discord';
import { DiscordRepository } from '../../repositories/DiscordRepository';

export class InMemoryDiscordRepository implements DiscordRepository {
  constructor(public items: Discord[] = []) {}
  async create(discord: Discord): Promise<void> {
    this.items.push(discord);
  }
  listAllDiscords(): Discord[] {
    return this.items;
  }
  findById(id: string): Discord | undefined {
    return this.items.find((discord) => discord.id === id);
  }
}
