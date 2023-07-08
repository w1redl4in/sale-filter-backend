import { UseCaseError } from '../../../../core/domain/errors/UseCaseError';

export class BotAlreadyExistsError extends Error implements UseCaseError {
  constructor() {
    super(`Bot already exists.`);
    this.name = 'BotAlreadyExistsError';
  }
}
