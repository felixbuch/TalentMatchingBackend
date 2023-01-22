const pool = require("../../db");
const queries = require("./queries");
const { assignSkillToProject } = require("../skills/queries");
const { addUser, checkEmailExists } = require("../users/queries");

// addProject nutzt die FormData für das Submitten auf der Projekt-Starten-Seite

const addProject = async (req, res) => {
  const {
    name,
    email,
    skills,
    projektname,
    projektbeschreibung
  } = req.body;
  console.log(skills);

  // E-Mail checken
  let results = await pool.query(checkEmailExists, [email]) // Deklariere ich als let, weil ich's dann überschreiben kann nachher.

  if (results.rows.length) {
    res.send("Email existiert bereits");
    return // Early return, damit spar ich mir eine Einrückung hier nach in einem zusätzlichen else-Teil.
  }

  // User adden
  results = await pool.query(
    addUser,
    [
      name,
      email,
    ],
  )
  const user = results.rows[0]; // 0-tes Element des Arrays ist hier der User

  // Projekt adden
  projectResults = await pool.query(
    queries.addProject,
    [
      projektname,
      projektbeschreibung,
      user.user_id,
    ],
  )

  const project = projectResults.rows[0]; // 0-tes Element des Arrays ist hier das Projekt

  // Jeweils die Skill-IDs aus dem Array holen und mit Projekt_ID in ps_links-Tabelle schreiben
  for (let i = 0; i < skills.length; i++) {
    await pool.query(assignSkillToProject, [project.projekt_id, skills[i]])
  }
  res.status(201).json(project);
};

module.exports = { addProject };