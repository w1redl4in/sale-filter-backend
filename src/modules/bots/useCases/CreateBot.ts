import { Either, left } from '../../../core/logic/Either';
import { Bot } from '../domain/bot';
import { BotRepository } from '../repositories/BotRepository';
import { ValidateIfBotAlreadyExistsUseCase } from './ValidateIfBotAlreadyExists';
import { BotAlreadyExistsError } from './errors/bot-already-exists-error';
import { InvalidNameOrChannelIdError } from './errors/invalid-name-or-channel-id-error';

interface CreateBotDTO {
  name: string;
  channelId: string;
}

export class CreateBotUseCase {
  constructor(
    private botRepository: BotRepository,
    private validateIfBotAlreadyExistsUseCase: ValidateIfBotAlreadyExistsUseCase,
  ) {}

  async execute(
    props: CreateBotDTO,
  ): Promise<Either<InvalidNameOrChannelIdError, Bot>> {
    const { name, channelId } = props;

    const botAlreadyExists =
      await this.validateIfBotAlreadyExistsUseCase.execute({
        channelId,
      });

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
