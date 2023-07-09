import { Repository } from 'typeorm';
import { BotRepository } from './BotRepository';
import { BotEntity } from 'src/infra/db/typeorm/Bot.entity';

export class BotTypeOrmRepository implements BotRepository {
  constructor(private ormRepository: Repository<BotEntity>) {}

  async create(bot: BotEntity) {
    const { name, channelId } = bot;
    const botEntity = await this.ormRepository.create({ name, channelId });
    await this.ormRepository.save(botEntity);
  }

  async listAllBots() {
    return this.ormRepository.find();
  }

  async findByChannelId(channelId: string) {
    return this.ormRepository.findOne({ where: { channelId } });
  }
}
