const pool = require("../../db");
const queries = require("./queries");


// Definiere alle Endpunkte


const getTalents = (req, res) => {
  console.log("getting talents");
  pool.query(
    /*"SELECT * FROM talents"*/ queries.getTalents,
    (error, results) => {
      if (error) {
        //console.log("das ist ein error");
        console.log(error);
        throw error;
      } else {
        //console.log("das ist ein else");
        //console.log(results);
        res.status(200).json(results.rows);
      }
    }
  );
};

const enterSkill = (req, res) => {
  console.log("entering skill & email");
  pool.query(
    /*"SELECT * FROM talents"*/ queries.enterSkill,
    (error, results) => {
      if (error) {
        //console.log("das ist ein error");
        console.log(error);
        throw error;
      } else {
        //console.log("das ist ein else");

        //console.log(results);
        res.status(200).json(results.rows);
      }
    }
  );
};

const addTalent = (req, res) => {
  const {
    email,
    javascript,
    holzarbeit,
    webdesign,
    dreiddruck,
    textilarbeit,
    software,
    produktdesign,
    goldschmied,
  } = req.body;

  // check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email allready exists");
    }
    //add talent to db
    else {
      pool.query(
        queries.addTalent,
        [
          email,
          javascript,
          holzarbeit,
          webdesign,
          dreiddruck,
          textilarbeit,
          software,
          produktdesign,
          goldschmied,
        ],
        (error, results) => {
          if (error) {
            throw error;
          } else {
            res.status(201).send("Talent Created Successfully!");
          }
        }
      );
    }
  });
};

module.exports = { getTalents, enterSkill, addTalent };
