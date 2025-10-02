import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "users" },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt:
});
