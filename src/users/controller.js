const pool = require("../../db");
const queries = require("./queries");
const { assignSkillToUser } = require("../skills/queries");
const sendMail = require("../../sendgrid");

// addUser nutzt die FormData für das Submitten auf der Anmelden-Seite
const addUser = async (req, res) => {
  const { name, email, skills } = req.body;
  //console.log(req.body);


  sendMail(name, email);

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

};

module.exports = { addUser };
