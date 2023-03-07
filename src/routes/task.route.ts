import { Router } from "express";
import { getTask, addTask, deleteTask, updateTask } from "../controllers/task.controller";
import { verifyJwt } from "../utilites/verify_jwt";

const taskRoutes = Router();

taskRoutes.get("/task", verifyJwt, getTask);   //middleware and next function 

taskRoutes.post("/task", verifyJwt, addTask);

taskRoutes.delete("/task", verifyJwt, deleteTask);

taskRoutes.put("/task", verifyJwt, updateTask)

export default taskRoutes;