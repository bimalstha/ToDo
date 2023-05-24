import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entities";

//crating table for task and its columns
@Entity()
export class ToDoTask {
    @PrimaryGeneratedColumn("uuid")
    taskId: number;

    @Column()
    task: string;

    @Column('boolean', { default: false })
    isDoneStatus: boolean;

    @CreateDateColumn()
    createdDate: Date

    @UpdateDateColumn()
    updatedDate: Date

    @ManyToOne(() => User, (user) => user.tasks)  //relation from user to task table 
    @JoinColumn({ name: 'user_id' })      //setting name for the foreign key column 
    user: User;
}