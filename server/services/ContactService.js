require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports.sendEmail = async function (data) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    service: "gmail",
  });

  // send mail with defined transport object
  let info = await transporter.sendMail(
    {
      from: data.sender, // sender address
      to: data.reciver, // list of receivers
      subject: data.subject, // Subject line
      text: data.text, // plain text body
    },
    (err, data) => {
      if (err) {
        console.log("error", err);
      } else {
        console.log("email sent", data);
      }
    }
  );
};
