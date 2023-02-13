import { Router } from "express";
import { getTask, addTask, deleteTask } from "../controllers/task.controller";

const taskRoutes = Router();

taskRoutes.get("/task", getTask);

taskRoutes.post("/task", addTask);

taskRoutes.delete("/task", deleteTask);

export default taskRoutes;