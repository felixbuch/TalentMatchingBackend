const pool = require("../../db");
const queries = require("./queries");
const { assignSkillToProject } = require("../skills/queries");
const { addUser, checkEmailExists } = require("../users/queries");
const { sendProjectRequest } = require("../../sendgrid");

// addProject nutzt die FormData für das Submitten auf der Projekt-Starten-Seite

const addProject = async (req, res) => {
  const {
    name,
    email,
    skills, //skill id [2,3,4...12]
    projektname,
    projektbeschreibung,
  } = req.body;
  /*
  // E-Mail checken
  let results = await pool.query(checkEmailExists, [email]) // Deklariere ich als let, weil ich's dann überschreiben kann nachher.

  if (results.rows.length) {
    res.send("Email existiert bereits");
    return // Early return, damit spar ich mir eine Einrückung hier nach in einem zusätzlichen else-Teil.
  }
*/
  // User adden
  results = await pool.query(addUser, [name, email]);
  const user = results.rows[0]; // 0-tes Element des Arrays ist hier der User
  //console.log("Das ist result.rows[0]" + JSON.stringify(results.rows[0]))

  // Projekt adden
  projectResults = await pool.query(queries.addProject, [
    projektname,
    projektbeschreibung,
    user.user_id,
  ]);

  const project = projectResults.rows[0]; // 0-tes Element des Arrays ist hier das Projekt

  // Jeweils die Skill-IDs aus dem Array holen und mit Projekt_ID in ps_links-Tabelle schreiben
  for (let i = 0; i < skills.length; i++) {
    await pool.query(assignSkillToProject, [project.projekt_id, skills[i]]);
  }
  res.status(201).json(project);


  let skillstring = skills.toString();
  
  console.log("skillstring" + skillstring);


  let talentarray = await pool.query(
    `SELECT DISTINCT u.name AS receivername, u.email AS receiveremail FROM us_links us, users u WHERE us.user_id = u.user_id AND us.skill_ID IN (${skillstring})`
  );

  let talentarray2 = JSON.stringify(talentarray.rows[0])


  for (let i = 0; i < talentarray.rows.length; i++) {
    
sendProjectRequest(
    talentarray.rows[i].receivername,
    talentarray.rows[i].receiveremail,
    name,
    projektname,
    projektbeschreibung,
    email, 
    skills)

  }
};


module.exports = { addProject };

