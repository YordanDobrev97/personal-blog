const mongoose = require("../config/db");

const postSchema = new mongoose.Schema({
  title: String,
  image: String,
  content: String,
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
