import { BotRepository } from '../repositories/BotRepository';
import { CreateBotUseCase } from './CreateBot';
import { ValidateIfBotAlreadyExistsUseCase } from './ValidateIfBotAlreadyExists';
import { InMemoryBotRepository } from './in-memory/InMemoryBotRepository';

let botRepository: BotRepository;
let createBotUseCase: CreateBotUseCase;
let validateIfBotAlreadyExistsUseCase: ValidateIfBotAlreadyExistsUseCase;

describe('CreateBot - UseCase', () => {
  beforeEach(() => {
    botRepository = new InMemoryBotRepository();
    validateIfBotAlreadyExistsUseCase = new ValidateIfBotAlreadyExistsUseCase(
      botRepository,
    );
    createBotUseCase = new CreateBotUseCase(
      botRepository,
      validateIfBotAlreadyExistsUseCase,
    );
  });

  it('should be able to create a new bot', async () => {
    const response = await createBotUseCase.execute({
      name: 'GPU Bipolar',
      channelId: 'gpu_bipolar',
    });

    expect(response.isRight()).toBeTruthy();
  });
});
