// env vars
require("dotenv").config();

// get pool from postgresql library
const Pool = require("pg").Pool;

// connect db to server
// create pool and provide credentials
const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
});

module.exports = pool;
