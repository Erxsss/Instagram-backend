import express from "express";
import { createPost } from "../controller/post/post.create.js";
import { findPost } from "../controller/post/post.find.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
const postRouter = express.Router();
postRouter.post("/create", authMiddleware, createPost);
postRouter.post("/posts", authMiddleware, findPost);
export default postRouter;
