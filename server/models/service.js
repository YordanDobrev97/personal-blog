const mongoose = require("../config/db");

const service = new mongoose.Schema({
  type: String,
  description: String,
  image: String,
});

const Service = mongoose.model("Service", service);
module.exports = Service;
