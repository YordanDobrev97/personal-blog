const connectionString =
  "mongodb+srv://admin:1230kSddskdsa-231-sd@cluster0.hnbjy.mongodb.net/blog?retryWrites=true&w=majority";
const mongoose = require("mongoose");

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("open", () => console.log("Connected to database"));

module.exports = mongoose;
