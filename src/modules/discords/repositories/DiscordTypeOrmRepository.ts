import { DiscordEntity } from 'src/infra/db/typeorm/Discord.entity';
import { DiscordRepository } from './DiscordRepository';
import { Repository } from 'typeorm';

export class DiscordTypeOrmRepository implements DiscordRepository {
  constructor(private ormRepository: Repository<DiscordEntity>) {}

  async create(discord: DiscordEntity) {
    const { discordName, webhookUrl, keys } = discord;

    const discordEntity = await this.ormRepository.create({
      discordName,
      webhookUrl,
      keys,
    });

    await this.ormRepository.save(discordEntity);
  }

  async listAllDiscords() {
    return this.ormRepository.find();
  }

  async findById(id: string) {
    return this.ormRepository.findOne({ where: { id } });
  }
}
