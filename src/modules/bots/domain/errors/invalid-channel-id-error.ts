import { BotDomainError } from '../../../bots/domain/errors/bot-domain-error';

export class InvalidChannelIdError extends Error implements BotDomainError {
  constructor(channelId: string) {
    super(`Invalid channelId: ${channelId}`);
    this.name = 'InvalidChannelIdError';
  }
}
