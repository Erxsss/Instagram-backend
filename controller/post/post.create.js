import { postModel } from "../../post.schema.js";
export const createPost = async (req, res) => {
  const body = req.body;
  const newPost = await postModel.create({
    userId: body.userId,
    caption: body.caption,
    like: body.like,
    comment: body.comment,
    images: body.images,
  });
  res.json(newPost);
};
