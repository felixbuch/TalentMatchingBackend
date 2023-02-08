const pool = require("../../db");
const queries = require("./queries");
const { assignSkillToUser } = require("../skills/queries");
//const mailer = require("../../mailer");
const sendMail = require("../../sendgrid");
//const { json } = require("express");

// addUser nutzt die FormData für das Submitten auf der Anmelden-Seite

const addUser = async (req, res) => {
  const { name, email, skills } = req.body;
  //console.log(skills);
  console.log(req.body);

  // E-Mail checken
  /* 
  let results = await pool.query(queries.checkEmailExists, [email]); // Deklariere ich als let, weil ich's dann überschreiben kann nachher.
  console.log("hallo warum logge ich nicht?")
  console.log("Results" + JSON.stringify(results.rowCount));
  if (results.rowCount > 0) {
    res.send("Email existiert bereits");
    console.log("Das ist res" + res);
    return // Early return, damit spar ich mir eine Einrückung hier nach in einem zusätzlichen else-Teil.
  }
  */

  //mailer(name, email), sende Anmeldungsbestätigung;
  sendMail(name, email);
  //mailer().catch(console.error)

  results = await pool.query(queries.addUser, [name, email]);
  const user = results.rows[0]; // 0-tes Element des Arrays ist hier der User

  if (skills) {
    // Jeweils die Skill-IDs aus dem Array holen und mit User_ID in us_links-Tabelle schreiben
    for (let i = 0; i < skills.length; i++) {
      await pool.query(assignSkillToUser, [user.user_id, skills[i]]);
    }
  } else {
    res.status(400).send();
    return;
  }
  res.status(201).json(user);

  //mailer(name, email);
  //mailer().catch(console.error)
};

module.exports = { addUser };
