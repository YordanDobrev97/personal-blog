const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const aboutRoute = require("./routes/about");
const skillRoute = require("./routes/skill");
const projectRoute = require("./routes/project");
const serviceRoute = require("./routes/service");
const postRoute = require("./routes/post");
const contactRoute = require("./routes/contact");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/aboutMe", aboutRoute);
app.use("/skills", skillRoute);
app.use("/projects", projectRoute);
app.use("/services", serviceRoute);
app.use("/posts", postRoute);
app.use("/contact", contactRoute);

app.listen(PORT, () => console.log(`Server is starting on port ${PORT}`));
