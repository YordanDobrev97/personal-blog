const Project = require("../models/project");

module.exports.getAll = async () => {
  const data = await Project.find({}, null, { lean: true });
  return data;
};
