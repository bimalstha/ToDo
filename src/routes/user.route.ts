import { Router } from "express";
import { addUser, deleteUser, getUser, login, sendJwt } from "../controllers/user.controller";

const userRoutes = Router()

userRoutes.get("/user", getUser);

userRoutes.post("/user", addUser);


userRoutes.post("/user", login);

userRoutes.delete("/user", deleteUser);

userRoutes.post("/user/test",sendJwt);

export default userRoutes;