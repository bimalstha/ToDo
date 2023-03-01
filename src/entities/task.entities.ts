import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.entities";


@Entity()
export class ToDoTask {
    @PrimaryGeneratedColumn("uuid")
    taskId: number;

    @Column()
    task: string;

    @Column('boolean', { default: false })
    isDoneStatus: boolean;

    @ManyToOne(() => User, (user) => user.tasks)
    @JoinColumn({ name: 'user_id' })
    user: User;
}