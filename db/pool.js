<<<<<<< HEAD

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
=======
// This file is responsible for creating a connection pool to the database
// It exports a pool object that can be used to query the database

const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "sanuarkhan",
  database: "messages",
  password: "islam",
  port: 5432 // The default port
>>>>>>> 86ec19a18f002ecee9d0bcd4828c911eff2a3a6e
});
