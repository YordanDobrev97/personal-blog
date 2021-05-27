const ProjectService = require("../services/ProjectService");

module.exports.getAll = async () => {
  const result = await ProjectService.getAll();
  return result;
};
