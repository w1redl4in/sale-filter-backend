import { BotDomainError } from '../../../bots/domain/errors/bot-domain-error';

export class InvalidDiscordNameError extends Error implements BotDomainError {
  constructor(discordName: string) {
    super(`Invalid discord name: ${discordName}`);
    this.name = 'InvalidDiscordNameError';
  }
}
