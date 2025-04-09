const dotenv = require('dotenv');
dotenv.config();
const {Client} = require('pg');

<<<<<<< HEAD
// const pghost = process.env.PGHOST;
// const pguser = process.env.PGUSER;
// const pgdatabase = process.env.PGDATABASE;
// const pgpassword = process.env.PGPASSWORD;
// const pgport = process.env.PGPORT;
const { pg_connectionString } = require('../constant.js');

=======
const pghost = process.env.PGHOST;
const pguser = process.env.PGUSER;
const pgdatabase = process.env.PGDATABASE;
const pgpassword = process.env.PGPASSWORD;
const pgport = process.env.PGPORT;
>>>>>>> 86ec19a18f002ecee9d0bcd4828c911eff2a3a6e



const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
        text TEXT,
        username TEXT,
        date TIMESTAMPTZ DEFAULT NOW()
    );
    INSERT INTO messages (text, username) VALUES ('Hello, World!', 'Anonymous');
    INSERT INTO messages (text, username) VALUES ('Goodbye, World!', 'Anonymous');
    
`;

async function populate() {
    console.log(`seeding...`);
    const client = new Client({
<<<<<<< HEAD
        connectionString: pg_connectionString,
=======
        connectionString: `postgresql://${pguser}:${pgpassword}@${pghost}:${pgport}/${pgdatabase}`
>>>>>>> 86ec19a18f002ecee9d0bcd4828c911eff2a3a6e
    });
    await client.connect();
    await client.query(SQL);
    await client.end();

    console.log(`seeded done!`);
}

populate();



