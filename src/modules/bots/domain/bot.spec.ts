import { left } from '../../../core/logic/Either';
import { Bot } from './bot';
import { InvalidNameError } from './errors/invalid-name-error';

describe('Bot Domain', () => {
  it('should be able to create a Bot instance when data is valid', () => {
    const botOrError = Bot.create({
      name: 'GPU Bipolar',
      channelId: 'gpu_bipolar_so_placas',
    });

    expect(botOrError.isRight()).toBeTruthy();
  });

  it('shouldnt able to create a Bot without a name', () => {
    const botOrError = Bot.create({
      name: '',
      channelId: 'gpu_bipolar_so_placas',
    });

    expect(botOrError.isLeft()).toBeTruthy();
    expect(botOrError).toEqual(left(new InvalidNameError('')));
  });
});
