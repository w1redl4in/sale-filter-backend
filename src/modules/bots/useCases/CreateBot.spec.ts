import { BotRepository } from '../repositories/BotRepository';
import { CreateBotUseCase } from './CreateBot';
import { InMemoryBotRepository } from './in-memory/InMemoryBotRepository';

let botRepository: BotRepository;
let createBotUseCase: CreateBotUseCase;

describe('CreateBot - UseCase', () => {
  beforeEach(() => {
    botRepository = new InMemoryBotRepository();
    createBotUseCase = new CreateBotUseCase(botRepository);
  });

  it('should be able to create a new bot', async () => {
    const response = await createBotUseCase.execute({
      name: 'GPU Bipolar',
      channelId: 'gpu_bipolar',
    });

    expect(response.isRight()).toBeTruthy();
  });
});
