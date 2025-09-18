import express from "express";
import { login } from "../controller/user/user.login.js";
import { signup } from "../controller/user/user.signup.js";
const userRouter = express.Router();
userRouter.post("/login", login);
userRouter.post("/signup", signup);
export default userRouter;
