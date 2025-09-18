import mongoose, { connect, mongo } from "mongoose";
import express from "express";
import { userModel } from "./users.schema.js";
import { postModel } from "./post.schema.js";
import { hash, compare } from "bcrypt";
import cors from "cors";
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
app.post("/user/create", async (req, res) => {
  const body = req.body;
  const email = body.email;
  const saltRound = 10;
  const hashedPassword = await hash(body.password, saltRound);
  const isExisting = await userModel.findOne({ email: email });
  if (isExisting) {
    res.json("Change email pls");
  } else {
    const newUser = await userModel.create({
      username: body.username,
      email: body.email,
      password: hashedPassword,
      bio: body.bio,
    });
    res.json(newUser);
  }
});
app.post("/post/create", async (req, res) => {
  const body = req.body;
  const newPost = await postModel.create({
    userId: body.userId,
    caption: body.caption,
    like: body.like,
    comment: body.comment,
    images: body.images,
  });
  res.json(newPost);
});
app.post("/user/login", async (req, res) => {
  const body = req.body;
  const { email, password } = body;
  const user = await userModel.findOne({ email });
  if (user) {
    const hashedPassword = user.password;
    const isValid = await compare(password, hashedPassword);
    if (isValid) {
      res.json(user);
    } else {
      res.status(404).json({ message: "Wrong password" });
    }
  } else {
    res.status(404).json({ message: "Register" });
  }
});
app.get("/user/posts/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const posts = await postModel.find({
    userId: id,
  });
  console.log(posts);
  res.json(posts);
});
