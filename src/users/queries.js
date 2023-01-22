// Nutzer hinzufügen.

const addUser =
     "INSERT INTO users(Name, Email) VALUES ($1, $2) RETURNING * ";

// E-Mail-Überprüfung.
     
const checkEmailExists = "SELECT * FROM users u WHERE u.Email = $1";

module.exports = { addUser, checkEmailExists };