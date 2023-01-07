const getTalents = "SELECT * FROM talents";

const enterSkill =
  "INSERT INTO talents(email, javascript, holzarbeit, webdesign, dreiddruck, textilarbeit, software, produktdesign, goldschmied) VALUES( 'peter2@hausen.de', true, false, false, false, true, false, true, false)";

const checkEmailExists = "SELECT s FROM talents s WHERE s.email = $1";

const addTalent =
  "INSERT INTO talents(email, javascript, holzarbeit, webdesign, dreiddruck, textilarbeit, software, produktdesign, goldschmied) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

module.exports = { getTalents, enterSkill, checkEmailExists, addTalent };
