const AboutService = require("../services/AboutService");

module.exports.index = async () => {
  const result = await AboutService.about();
  return result;
};
