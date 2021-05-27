const express = require("express");
const router = express.Router();
const AboutController = require("../controllers/AboutController");

router.get("/", async (req, res) => {
  const data = await AboutController.index();
  console.log(data);
  return res.json(data);
});

module.exports = router;
