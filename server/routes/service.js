const express = require("express");
const router = express.Router();
const ServiceController = require("../controllers/ServiceController");

router.get("/", async (req, res) => {
  const data = await ServiceController.getAll();
  console.log(data);
  return res.json(data);
});

module.exports = router;
