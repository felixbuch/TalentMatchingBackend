"use strict";
require('dotenv').config();
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function mailer(name, email) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.web.de",
    port: 465, //587
    secure: true, // true for 465, false for other ports
    //requireTLS: true,
    auth: {
      user: process.env.EMAILUSER, // generated ethereal user
      pass: process.env.EMAILPWD, // generated ethereal password
    },
  });
/*
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'stephanie29@ethereal.email',
        pass: 'SBnTAHBtQKN9fcHcXk'
    }
});*/

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Talent Matching Startup Yard 👻" <welcome@talentmatch-startupyard.com>', // sender address
    to: `stephanie29@ethereal.email`, // list of receivers
    subject: `"Hello "${name}`, // Subject line
    text: `"Hello world: das ist meine email: "${email}`, // plain text body
    html: `"<b>Hello world?das ist meine email:${email}</b>"`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

//mailer().catch(console.error);

module.exports = mailer;