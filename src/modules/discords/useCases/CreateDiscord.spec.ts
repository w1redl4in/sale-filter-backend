import { DiscordRepository } from '../repositories/DiscordRepository';
import { CreateDiscordUseCase } from './CreateDiscord';
import { InMemoryDiscordRepository } from './in-memory/inMemoryDiscordRepository';

let discordRepository: DiscordRepository;
let createDiscordUseCase: CreateDiscordUseCase;

describe('CreateDiscord - UseCase', () => {
  beforeEach(() => {
    discordRepository = new InMemoryDiscordRepository();
    createDiscordUseCase = new CreateDiscordUseCase(discordRepository);
  });

  it('should be able to create a new discord', async () => {
    const response = await createDiscordUseCase.execute({
      discordName: 'Vanir',
      webhookUrl: 'https://discord.com/mockWebhookUrl',
      keys: ['4070 Ti', 'RAM'],
    });

    expect(response.isRight()).toBeTruthy();
  });
});
