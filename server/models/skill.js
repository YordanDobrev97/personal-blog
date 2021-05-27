const mongoose = require("../config/db");

const skillSchema = new mongoose.Schema({
  image: String,
  name: String,
});

const Skill = mongoose.model("Skill", skillSchema);
module.exports = Skill;
