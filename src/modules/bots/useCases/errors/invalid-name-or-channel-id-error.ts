import { UseCaseError } from '../../../../core/domain/errors/UseCaseError';

export class InvalidNameOrChannelIdError extends Error implements UseCaseError {
  constructor() {
    super(`Invalid name/channelId combination.`);
    this.name = 'InvalidNameOrChannelIdError';
  }
}
