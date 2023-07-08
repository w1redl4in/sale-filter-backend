import { BotDomainError } from '../../../bots/domain/errors/bot-domain-error';

export class InvalidNameError extends Error implements BotDomainError {
  constructor(name: string) {
    super(`Invalid name: ${name}`);
    this.name = 'InvalidNameError';
  }
}
