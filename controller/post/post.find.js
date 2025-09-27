import { postModel } from "../../post.schema.js";

export const findPost = async (req, res) => {
  const posts = await postModel.find();
  console.log(posts);
  res.json(posts);
};
