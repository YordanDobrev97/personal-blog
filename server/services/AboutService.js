const About = require("../models/about");

module.exports.about = async () => {
  const data = await About.find({}, null, { lean: true });
  console.log(data);
  return data;
};
