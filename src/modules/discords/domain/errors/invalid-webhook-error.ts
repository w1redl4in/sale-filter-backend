import { BotDomainError } from '../../../bots/domain/errors/bot-domain-error';

export class InvalidWebhookUrlError extends Error implements BotDomainError {
  constructor(webhookUrl: string) {
    super(`Invalid webhook url: ${webhookUrl}`);
    this.name = 'InvalidWebhookUrlError';
  }
}
