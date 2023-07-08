import { Entity } from '../../../core/domain/Entity';
import { Either, left, right } from '../../../core/logic/Either';
import { InvalidChannelIdError } from './errors/invalid-channel-id-error';
import { InvalidNameError } from './errors/invalid-name-error';

interface BotProps {
  name: string;
  channelId: string;
}

export class Bot extends Entity<BotProps> {
  private constructor(props: BotProps, id?: string) {
    super(props, id);
  }

  get name() {
    return this.props.name;
  }

  get channelId() {
    return this.props.channelId;
  }

  static validateName(name: string): Either<InvalidNameError, string> {
    if (!name) {
      return left(new InvalidNameError(name));
    }

    return right(name);
  }

  static validateChannelId(
    channelId: string,
  ): Either<InvalidNameError, string> {
    if (!channelId) {
      return left(new InvalidNameError(channelId));
    }

    return right(channelId);
  }

  static create(
    props: BotProps,
    id?: string,
  ): Either<InvalidNameError | InvalidChannelIdError, Bot> {
    const { name, channelId } = props;

    const nameOrError: Either<InvalidNameError, string> =
      this.validateName(name);

    if (nameOrError.isLeft()) {
      return left(nameOrError.value);
    }

    const channelIdOrError: Either<InvalidChannelIdError, string> =
      this.validateChannelId(channelId);

    if (channelIdOrError.isLeft()) {
      return left(channelIdOrError.value);
    }

    return right(new Bot(props, id));
  }
}
