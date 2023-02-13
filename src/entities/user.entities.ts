import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ToDoTask } from "./task.entities";


@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    userId: string

    @Column()
    userName: string

    @Column()
    password: string

    @OneToMany(() => ToDoTask, (tasks) => tasks.user)
    tasks: ToDoTask[]
}