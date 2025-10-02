import { postModel } from "../../post.schema.js";

export const findPost = async (req, res) => {
  const user = req.user;
  const posts = await postModel.find().populate("userId");
  res.json(posts);
};
