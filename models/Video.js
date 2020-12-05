import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Tilte is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      /*  "Comment" 는 models/Comment.js 에 있는
          const model = mongoose.model("Comment", CommentSchema);
          에 "Comment"와 같음!!! 중요!!
       */
    },
  ],
});

const model = mongoose.model("Video", VideoSchema);
export default model;
