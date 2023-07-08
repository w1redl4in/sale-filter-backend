import { Either } from '../../../core/logic/Either';
import { BotRepository } from '../repositories/BotRepository';

interface ValidateIfBotAlreadyExistsDTO {
  channelId: string;
}

export class ValidateIfBotAlreadyExistsUseCase {
  constructor(private botRepository: BotRepository) {}

  async execute(props: ValidateIfBotAlreadyExistsDTO): Promise<boolean> {
    const { channelId } = props;

    const bot = await this.botRepository.findByChannelId(channelId);

    if (bot) return true;

    return false;
  }
}
