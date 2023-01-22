// Skills aus DB laden.

const getSkills = "SELECT * FROM skills";


// Skills den Nutzern zuweisen.

const assignSkillToUser =
  "INSERT INTO us_links(User_ID, Skill_ID) VALUES ($1, $2)";

// Skills den Projekten zuweisen.

const assignSkillToProject =
  "INSERT INTO ps_links(Projekt_ID, Skill_ID) VALUES ($1, $2)";

module.exports = {getSkills, assignSkillToProject, assignSkillToUser};