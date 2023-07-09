import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'bots',
})
export class BotEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  channelId: string;
}
