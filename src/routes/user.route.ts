import { Router } from "express";
import { registerUser, deleteUser, login } from "../controllers/user.controller";

const userRoutes = Router();


//user API 
userRoutes.post("/user", registerUser);

userRoutes.post("/user/login", login);

userRoutes.delete("/user", deleteUser);

export default userRoutes;