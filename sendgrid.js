// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
//javascript
require("dotenv").config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

 function sendMail(name, email) {
  let msg =  {
    to: `${email}`, // Change to your recipient
    from: "hs-startup-crew@web.de", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: `"<strong>Hello ${name} this is an email for you</strong>"`,
  };
console.log("name is for recipient" + name)
console.log("email is for recipient" + email)
console.log("msg is for recipient" + msg)
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = sendMail;
