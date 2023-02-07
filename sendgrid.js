// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
//javascript
require("dotenv").config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendMail(name, email) {
  let msg = {
    to: `${email}`, // Change to your recipient
    from: "hs-startup-crew@web.de", // Change to your verified sender
    subject: `"Hallo ${name} - Willkommen bei HS-Wismar-Talentmatching!"`,
    text: "Willkommen bei HS-Wismar-Talentmatching!",
    html: `<h1><strong>Hallo ${name} - Willkommen bei HS-Wismar-Talentmatching!</strong></h1>
    <p>Vielen Dank für deine Anmeldung auf unserer Skillmatching Plattform.</p> <br><br>
    <p>Um dein Konto zu bestätigen, klicke bitte auf den folgenden Link:</p>
    <a href="https://felixbuch.github.io">Bestätigungslink</a><br><br>
    <p>Mit HS-Wismar-Talentmatching kannst du deine Fähigkeiten und Fertigkeiten mit anderen Studenten teilen, spannende Projekte starten und finden und vielleicht sogar ein studentisches Startup gründen.</p><br>
    <p>Wir freuen uns, dass du Teil unserer Community bist!</p><br>
    <p>Mit freundlichen Grüßen,</p><br>
    <p>Das HS-Wismar-Talentmatching Team</p>`,
  };

  console.log("name is for recipient" + name);
  console.log("email is for recipient" + email);
  console.log("msg is for recipient" + msg);
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}

function sendProjectRequest(
  receivername,
  receiveremail,
  projectstartername,
  projectname,
  projectdescription,
  projectstarteremail, 
  skills
) {
  let msg = {
    to: `${receiveremail}`, // Change to your recipient
    from: "hs-startup-crew@web.de", // Change to your verified sender
    subject: `"Hallo ${receivername} - Du hast ein Match!"`,
    text: "Lückenfüller!",
    html: `<h1><strong>Hallo ${receivername} - ${projectstartername} braucht deine Unterstützung!</strong></h1>
    <p>Hast du Interesse an unserem Projekt namens: ${projectname}</p> <br><br>
    <p>Projektbeschreibung: ${projectdescription}</p>
    <p>Für dieses Projekt benötigen wir Leute mit folgenden Skills: ${skills}</p>
    <p>Wenn du Lust hast an dem Projekt mitzuarbeiten, dann melde dich per Email: ${projectstarteremail}</p><br>
    
    <p>Mit freundlichen Grüßen,</p><br>
    <p>${projectstartername}</p>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}


module.exports = { sendMail, sendProjectRequest };