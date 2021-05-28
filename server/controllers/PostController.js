const PostService = require("../services/PostService");

module.exports.getAll = async () => {
  const result = await PostService.getAll();
  return result;
};
