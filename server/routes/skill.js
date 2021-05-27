const express = require("express");
const router = express.Router();
const SkillController = require("../controllers/SkillController");

router.get("/", async (req, res) => {
  const data = await SkillController.getAll();
  return res.json(data);
});

module.exports = router;
