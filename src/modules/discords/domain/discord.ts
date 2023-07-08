import { Entity } from '../../../core/domain/Entity';
import { Either, left, right } from '../../../core/logic/Either';
import { InvalidDiscordNameError } from './errors/invalid-discordname-error';
import { InvalidWebhookUrlError } from './errors/invalid-webhook-error';

interface DiscordProps {
  webhookUrl: string;
  discordName: string;
  keys?: string[];
}

export class Discord extends Entity<DiscordProps> {
  private constructor(props: DiscordProps, id?: string) {
    super(props, id);
  }

  get webhookUrl() {
    return this.props.webhookUrl;
  }

  get discordName() {
    return this.props.discordName;
  }

  get keys() {
    return this.props.keys;
  }

  static validateWebhookUrl(
    webhookUrl: string,
  ): Either<InvalidWebhookUrlError, string> {
    if (!webhookUrl) {
      return left(new InvalidWebhookUrlError(webhookUrl));
    }
    return right(webhookUrl);
  }

  static validateDiscordName(
    discordName: string,
  ): Either<InvalidDiscordNameError, string> {
    if (!discordName) {
      return left(new InvalidDiscordNameError(discordName));
    }
    return right(discordName);
  }

  static create(
    props: DiscordProps,
    id?: string,
  ): Either<InvalidWebhookUrlError | InvalidDiscordNameError, Discord> {
    const { webhookUrl, discordName, keys } = props;

    const webhookUrlOrError: Either<InvalidWebhookUrlError, string> =
      this.validateWebhookUrl(webhookUrl);

    if (webhookUrlOrError.isLeft()) {
      return left(webhookUrlOrError.value);
    }

    const discordNameOrError: Either<InvalidDiscordNameError, string> =
      this.validateWebhookUrl(webhookUrl);

    if (discordNameOrError.isLeft()) {
      return left(discordNameOrError.value);
    }

    return right(new Discord({ webhookUrl, discordName, keys }, id));
  }
}
