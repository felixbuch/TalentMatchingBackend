const pool = require("../../db");
const queries = require("./queries");

// getSkills lädt hier dynamisch die Einträge aus der DB für's Frontend.

  const getSkills = (req, res) => {
    console.log("getting skills");
    pool.query(
      queries.getSkills,
      (error, results) => {
        if (error) {
          console.log(error);
          throw error;
        } else {
          res.status(200).json(results.rows);
        }
      }
    );
  };

module.exports = {getSkills};
