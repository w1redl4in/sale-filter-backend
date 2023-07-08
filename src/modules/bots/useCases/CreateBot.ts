import { Either, left } from '../../../core/logic/Either';
import { Bot } from '../domain/bot';
import { BotRepository } from '../repositories/BotRepository';
import { BotAlreadyExistsError } from './errors/bot-already-exists-error';
import { InvalidNameOrChannelIdError } from './errors/invalid-name-or-channel-id-error';

interface CreateBotDTO {
  name: string;
  channelId: string;
}

export class CreateBotUseCase {
  constructor(private botRepository: BotRepository) {}

  async execute(
    props: CreateBotDTO,
  ): Promise<Either<InvalidNameOrChannelIdError, Bot>> {
    const { name, channelId } = props;

    const botAlreadyExists = await this.botRepository.findByChannelId(
      channelId,
    );

    if (botAlreadyExists) {
      return left(new BotAlreadyExistsError());
    }

    const bot = Bot.create({ name, channelId });

    if (bot.isLeft()) {
      return left(new InvalidNameOrChannelIdError());
    }

    await this.botRepository.create(bot.value);

    return bot;
  }
}
