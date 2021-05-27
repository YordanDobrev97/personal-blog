const mongoose = require("../config/db");

const projectSchema = new mongoose.Schema({
  image: String,
  link: String,
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
