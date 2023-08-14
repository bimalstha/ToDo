import { Request, Response } from "express";
import { dbSource } from "../connection/connection";
import { ToDoTask } from "../entities/task.entities";
import { getUserById } from "./user.controller";

const taskRepository = dbSource.getRepository(ToDoTask);



export const getTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await getUserById(req.body.user);
    const userTask = await taskRepository.find({
      where: {
        user,
      },
    });
    if (userTask.length) {
      return res.send(userTask);
    } else {
      return res.send({ msg: "user has no task" });
    }
  } catch (error) {
    return res.status(404).send(error);
  }
};

export const addTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    // const userr = await getUserById(req.body.user);
    // console.log("task add", userr);
    let { task, isDoneStatus, user } = req.body;
    let newTask = new ToDoTask();
    newTask.task = task;
    newTask.isDoneStatus = isDoneStatus;
    newTask.user = user;
    await taskRepository.save(newTask);
    return res.send({ msg: "task added" });
    // let taskToAdd = req.body;
    // const taskMap = taskRepository.create(taskToAdd);
    // await taskRepository.save(taskMap);
    // return res.send({ msg: "task added" });
  } catch (error) {
    return res.status(404).send({ msg: "can't add" });
  }
};

export const deleteTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await getUserById(req.body.user);
    let { taskId } = req.body;
    let deleteTask = await taskRepository.find({
      where: {
        user,
        taskId,
      },
    });
    console.log(deleteTask);
    if (deleteTask.length) {
      await taskRepository.remove(deleteTask);
      return res.send({ msg: "task deleted" });
    } else {
      return res.send({ msg: "task not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "can't find" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const user = await getUserById(req.body.user);
    let { task, isDoneStatus, taskId } = req.body;
    let updateTask = await taskRepository.find({
      where: {
        user,
        taskId,
      },
    });
    if (updateTask.length) {
      await taskRepository.update(taskId, {
        task: task,
        isDoneStatus: isDoneStatus,
      });
      return res.send({ msg: "task updated" });
    } else {
      return res.send({ msg: "task not found" });
    }
  } catch (error) {
    return res.status(403).send({ msg: "error occured" });
  }
};
