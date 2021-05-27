const SkillService = require("../services/SkillService");

module.exports.getAll = async () => {
  const result = await SkillService.getAll();
  return result;
};
