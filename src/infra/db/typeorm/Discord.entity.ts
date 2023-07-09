import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'discords',
})
export class DiscordEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  webhookUrl: string;

  @Column()
  discordName: string;

  @Column({
    nullable: true,
  })
  keys?: string;
}
