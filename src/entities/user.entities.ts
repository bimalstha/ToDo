import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ToDoTask } from "./task.entities";

//crating user table and its column
@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    userId: string

    @Column()
    userName: string

    @Column()
    password: string

    @OneToMany(() => ToDoTask, (tasks) => tasks.user)     //relation from user to task table
    tasks: ToDoTask[]
}