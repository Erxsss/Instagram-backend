import express from "express";
import { createPost } from "../controller/post/post.create.js";
import { findPost } from "../controller/post/post.find.js";
const postRouter = express.Router();
postRouter.post("/create", createPost);
postRouter.post("/posts", findPost);
export default postRouter;
