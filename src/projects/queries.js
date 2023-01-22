// Projekt hinzufügen.

const addProject =
  "INSERT INTO projekte(Name, Description, User_ID) VALUES ($1, $2, $3) RETURNING * ";

module.exports = { addProject };