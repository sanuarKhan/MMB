
const { Pool } = require("pg");

const {pg_user, pg_host, pg_database, pg_password, pg_port} = require('../constant.js');

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: pg_host, 
  user: pg_user,
  database: pg_database,
  password: pg_password,
  port: pg_port || 5432, // default postgres port
});
