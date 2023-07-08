import { bots } from '../../../tests/factories/BotFactory';
import { BotRepository } from '../repositories/BotRepository';
import { ValidateIfBotAlreadyExistsUseCase } from './ValidateIfBotAlreadyExists';
import { InMemoryBotRepository } from './in-memory/InMemoryBotRepository';

let botRepository: BotRepository;
let validateIfBotAlreadyExistsUseCase: ValidateIfBotAlreadyExistsUseCase;

describe('ValidateIfBotAlreadyExists - UseCase', () => {
  it('should return true if bot is already created', async () => {
    botRepository = new InMemoryBotRepository(bots);
    validateIfBotAlreadyExistsUseCase = new ValidateIfBotAlreadyExistsUseCase(
      botRepository,
    );

    const response = await validateIfBotAlreadyExistsUseCase.execute({
      channelId: 'gpu_bipolar',
    });

    expect(response).toBeTruthy();
  });

  it('should return false if bot is not created', async () => {
    botRepository = new InMemoryBotRepository();
    validateIfBotAlreadyExistsUseCase = new ValidateIfBotAlreadyExistsUseCase(
      botRepository,
    );

    const response = await validateIfBotAlreadyExistsUseCase.execute({
      channelId: 'gpu_bipolar',
    });

    expect(response).toBeFalsy();
  });
});
