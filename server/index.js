const express = require("express");
const app = express();
const PORT = 5000;
const aboutRoute = require("./routes/about");
const skillRoute = require("./routes/skill");
const projectRoute = require("./routes/project");

app.use("/aboutMe", aboutRoute);
app.use("/skills", skillRoute);
app.use("/projects", projectRoute);

app.listen(PORT, () => console.log(`Server is starting on port ${PORT}`));
