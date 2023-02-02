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
    subject: `"Hallo ${name} - Willkommen bei HS-Wismar-Talentmatching!"`,
    text: "and easy to do anywhere, even with Node.js",
    html: `"<h1><strong>Hallo ${name} - Willkommen bei HS-Wismar-Talentmatching!</strong></h1>
    <p>Vielen Dank für deine Anmeldung auf unserer Skillmatching Plattform.</p>
    <p>Um dein Konto zu bestätigen, klicke bitte auf den folgenden Link:</p>
    <a href="https://felixbuch.github.io">Bestätigungslink</a>
    <p>Mit HS-Wismar-Talentmatching kannst du deine Fähigkeiten und Fertigkeiten mit anderen Studenten teilen, spannende Projekte starten und finden und vielleicht sogar ein studentisches Startup gründen.</p>
    <p>Wir freuen uns, dass du Teil unserer Community bist!</p>
    <p>Mit freundlichen Grüßen,</p>
    <p>Das HS-Wismar-Talentmatching Team</p>"`,   
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
