const dotenv = require('dotenv');
dotenv.config();
const pg_user = process.env.POSTGRES_USER;
const pg_host = process.env.POSTGRES_HOST;
const pg_database = process.env.POSTGRES_DB;
const pg_password = process.env.POSTGRES_PASSWORD;
const pg_port = process.env.POSTGRES_PORT || 5432;
const pg_connectionString = process.env.POSTGRES_CONNECTION_STRING || `postgres://${pg_user}:${pg_password}@${pg_host}:${pg_port}/${pg_database}`;



module.exports = {
    pg_user,
    pg_host,
    pg_database,
    pg_password,
    pg_port,
    pg_connectionString
}
