import { Router } from "express";
import { registerUser, deleteUser, login } from "../controllers/user.controller";

const userRoutes = Router();

// saramsh way of coding
// import UserController from "../controllers/user.controller";
// userRoutes.use("/user", UserController);


//user API 
userRoutes.post("/user", registerUser);

userRoutes.post("/user/login", login);

userRoutes.delete("/user", deleteUser);

export default userRoutes;