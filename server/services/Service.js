const Service = require("../models/service");

module.exports.getAll = async () => {
  const data = await Service.find({}, null, { lean: true });
  return data;
};
