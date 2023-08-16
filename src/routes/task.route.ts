import { Router } from "express";

import {
  getTask,
  addTask,
  deleteTask,
  updateTask,
} from "../controllers/task.controller";
import { verifyJwt } from "../utilites/verify_jwt";

const taskRoutes = Router();
// adding swagger ui for the routes
/**
 * @swagger
 * /task:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Get all of your added task
 * /postTask:
 *   post:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: add the task here
 * /deleteTask/{id}:
 *   delete:
 *     summary: you can delete task here.
 *     description: delete a task by sending its id as params
 * /updateTask/{id}:
 *   put:
 *     summary: you can update task here
 *     description: update a task by sending its id as params
 */


taskRoutes.get("/gettask", getTask); //middleware and next function

taskRoutes.post("/addtask", addTask);

taskRoutes.delete("/deletetask", verifyJwt, deleteTask);

taskRoutes.put("/updatetask", verifyJwt, updateTask);

export default taskRoutes;
