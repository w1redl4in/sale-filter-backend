import { Either, left } from '../../../core/logic/Either';
import { Discord } from '../domain/discord';
import { DiscordRepository } from '../repositories/DiscordRepository';
import { InvalidWebhookUrlOrDiscordNameError } from './errors/invalid-webhook-url-or-discord-name-error';

interface CreateDiscordDTO {
  webhookUrl: string;
  discordName: string;
  keys?: string[];
}

export class CreateDiscordUseCase {
  constructor(private discordRepository: DiscordRepository) {}
  async execute(
    props: CreateDiscordDTO,
  ): Promise<Either<InvalidWebhookUrlOrDiscordNameError, Discord>> {
    const { webhookUrl, discordName, keys } = props;

    const discord = Discord.create({ webhookUrl, discordName, keys });

    if (discord.isLeft()) {
      return left(new InvalidWebhookUrlOrDiscordNameError());
    }

    await this.discordRepository.create(discord.value);

    return discord;
  }
}
