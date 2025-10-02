import { postModel } from "../../post.schema.js";
export const createPost = async (req, res) => {
  const body = req.body;
  const user = req.user;
  const newPost = await postModel.create({
    userId: user._id,
    caption: body.caption,
    like: body.like,
    comment: body.comment,
    images: body.images,
  });
  res.json(newPost, postModel);
};
