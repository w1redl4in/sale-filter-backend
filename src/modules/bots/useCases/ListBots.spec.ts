import { bots } from '../../../tests/factories/BotFactory';
import { BotRepository } from '../repositories/BotRepository';
import { ListBotsUseCase } from './ListBots';
import { InMemoryBotRepository } from './in-memory/InMemoryBotRepository';

let botRepository: BotRepository;
let listBotsUseCase: ListBotsUseCase;

describe('ListBots - UseCase', () => {
  beforeEach(() => {
    botRepository = new InMemoryBotRepository(bots);
    listBotsUseCase = new ListBotsUseCase(botRepository);
  });

  it('should be able to list all bots', async () => {
    const response = await listBotsUseCase.execute();

    expect(response).toHaveLength(10);
  });
});
