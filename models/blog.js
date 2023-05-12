import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comments:[
    {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    }
  ],
});

export const Blog = mongoose.model("Blog", schema);
