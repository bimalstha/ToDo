import { Router } from "express";
import { getTask, addTask, deleteTask } from "../controllers/task.controller";
import { verifyJwt } from "../utilites/verify_jwt";

const taskRoutes = Router();

taskRoutes.get("/task", verifyJwt, getTask);

taskRoutes.post("/task", addTask);

taskRoutes.delete("/task", deleteTask);

export default taskRoutes;