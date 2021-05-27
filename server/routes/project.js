const express = require("express");
const router = express.Router();
const ProjectController = require("../controllers/ProjectController");

router.get("/", async (req, res) => {
  const data = await ProjectController.getAll();
  return res.json(data);
});

module.exports = router;
