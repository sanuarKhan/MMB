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
});
