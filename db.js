
const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
  connectionString: process.env.DATABASE
});
/*
pool.query('SELECT * FROM talents;', (err, res) => {
  console.log(err, res);
  //pool.end();
});*/


module.exports = pool;