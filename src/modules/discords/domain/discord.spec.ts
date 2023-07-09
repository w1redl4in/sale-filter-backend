import { left } from '../../../core/logic/Either';
import { Discord } from './discord';
import { InvalidWebhookUrlError } from './errors/invalid-webhook-error';

describe('Discord Domain', () => {
  const keys = ['4070 Ti', '3060 Ti'].join(', ');
  const discordName = 'Discord Server Name';
  const webhookUrl = 'https://discord.com/mockWebhookUrl';

  it('should be able to create a Discord instance when data is valid', () => {
    const discordOrError = Discord.create({
      webhookUrl,
      discordName,
      keys,
    });
    expect(discordOrError.isRight()).toBeTruthy();
  });

  it('should be able to create a Discord instance without keys', () => {
    const discordOrError = Discord.create({
      webhookUrl,
      discordName,
    });
    expect(discordOrError.isRight()).toBeTruthy();
  });

  it('shouldnt able to create a Discord without a webhookUrl', () => {
    const discordOrError = Discord.create({
      discordName,
      keys,
      webhookUrl: '',
    });

    expect(discordOrError.isLeft()).toBeTruthy();
    expect(discordOrError).toEqual(left(new InvalidWebhookUrlError('')));
  });
});
