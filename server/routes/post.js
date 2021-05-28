const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");

router.get("/", async (req, res) => {
  const data = await PostController.getAll();
  return res.json(data);
});

module.exports = router;
