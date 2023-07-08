import { UseCaseError } from '../../../../core/domain/errors/UseCaseError';

export class InvalidWebhookUrlOrDiscordNameError
  extends Error
  implements UseCaseError
{
  constructor() {
    super(`Invalid webhookUrl/discordName combination.`);
    this.name = 'InvalidWebhookUrlOrDiscordNameError';
  }
}
