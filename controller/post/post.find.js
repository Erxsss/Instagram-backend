import { postModel } from "../../post.schema.js";

export const findPost = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const posts = await postModel.find({
    userId: id,
  });
  console.log(posts);
  res.json(posts);
};
