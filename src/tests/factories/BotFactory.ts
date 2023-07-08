import { Bot } from '../../modules/bots/domain/bot';

interface BotOverrides {
  name: string;
  channelId: string;
}

export function createBotFactory(overrides?: BotOverrides) {
  const bot = Bot.create({
    name: overrides?.name ?? 'GPU Bipolar',
    channelId: overrides?.channelId ?? 'gpu_bipolar',
  });

  return bot.value as Bot;
}

export const bots = Array.from({ length: 10 }).map(() =>
  createBotFactory({
    channelId: 'gpu_bipolar',
    name: 'GPU Bipolar',
  }),
);
