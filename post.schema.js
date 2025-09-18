import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "users" },
  caption: { type: String, required: true },
  like: [{ type: Schema.Types.ObjectId, required: false }],
  comment: [{ type: Schema.Types.ObjectId, required: false }],
  images: [{ type: String, required: false }],
  createdAt: { type: Date, default: Date.now() },
  updatedAt: Date,
});
export const postModel = mongoose.model("posts", postSchema);
