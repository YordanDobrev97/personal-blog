const Skill = require("../models/skill");

module.exports.getAll = async () => {
  const data = await Skill.find({}, null, { lean: true });
  return data;
};
