const nodemailer = require("nodemailer");
const { response, resquest } = require("express");

const send = (req = request, res = response) => {
  const { name, msg, email } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    secure: false, // use SSL
    port: 587, // port for secure SMTP
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.PASS_USER,
    },
  });

  transporter.sendMail(
    {
      from: `${process.env.EMAIL_USER}`,
      to: process.env.SEBA_EMAIL,
      subject: `${name} - sebacataldo webpage`,
      text: `${msg}\n\n\nEmail contacto: ${email}`,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Correo electrónico enviado: " + data.response);
      }
    }
  );
};

module.exports = { send };
