import mongoose, { connect, mongo } from "mongoose";
import express from "express";
import cors from "cors";
import userRouter from "./router/user.route.js";
import postRouter from "./router/post.route.js";
const app = express();
app.use(express.json());
app.use(cors());
const port = 5555;
const connectToDB = () => {
  mongoose.connect(
    "mongodb+srv://erkhes:Erkhes$$$210218%40%40%40@mycluster.wn3eplw.mongodb.net/"
  );
};
connectToDB();
app.listen(port, () => {
  console.log("Server is running at http://localhost:" + port);
});
app.use("/user", userRouter);
app.use("/post", postRouter);
