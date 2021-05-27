const mongoose = require("../config/db");

const aboutSchema = new mongoose.Schema(
  {
    description: String,
  },
  { collection: "about" }
);

const About = mongoose.model("About", aboutSchema);
module.exports = About;
