const ContactService = require("../services/ContactService");

const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { sender, subject, message } = req.body;
  const data = {
    sender: sender,
    reciver: "yordan.19Dobrev@gmail.com",
    subject: subject,
    text: message,
  };

  await ContactService.sendEmail(data);
  res.send("sended message");
});

module.exports = router;
