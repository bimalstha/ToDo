import { Request, Response } from "express";
import { dbSource } from "../connection/connection";
import { ToDoTask } from "../entities/task.entities";

const taskRepository = dbSource.getRepository(ToDoTask);

export const getTask = async (req: Request, res: Response): Promise<Response> => {
    try {
        const userTask = await taskRepository.find({
            where: {
                taskId: req.body.taskId,
                task: req.body.task,
                isDoneStatus: req.body.isDoneStatus,
            }
        });
        if (userTask.length > 0) {
            return res.send(userTask);
        } else {
            return res.send({ msg: "user has no task" });
        }
    } catch (error) {
        return res.send(error);
    }
}

export const addTask = async (req: Request, res: Response) => {
    try {
        let { task, isDoneStatus, user } = req.body;
        let newTask = new ToDoTask()
        newTask.task = task
        newTask.isDoneStatus = isDoneStatus
        newTask.user = user
        await taskRepository.save(newTask);
        return res.send({ msg: "task added" });
        // let taskToAdd = req.body;
        // const taskMap = taskRepository.create(taskToAdd);
        // await taskRepository.save(taskMap);
        // return res.send({ msg: "task added" });
    } catch (error) {
        console.log(error);
    }
}

export const deleteTask = async (req: Request, res: Response): Promise<Response> => {
    try {
        let { taskId, task, isDoneStatus } = req.body;
        let deleteTask = await taskRepository.find({
            where: {
                taskId: taskId,
                task: task,
                isDoneStatus: isDoneStatus,
            }
        });
        console.log(deleteTask)
        if (deleteTask.length > 0) {
            await taskRepository.remove(deleteTask);
            return res.send({ msg: "task deleted" });
        } else {
            return res.send({ msg: "task not found" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "can't find" });
    }
}