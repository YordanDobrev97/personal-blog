const Post = require("../models/post");

module.exports.getAll = async () => {
  const data = await Post.find({}, null, { lean: true });
  return data;
};
