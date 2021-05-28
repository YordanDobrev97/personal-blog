const Service = require("../services/Service");

module.exports.getAll = async () => {
  const result = await Service.getAll();
  return result;
};
