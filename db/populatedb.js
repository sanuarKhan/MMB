const dotenv = require('dotenv');
dotenv.config();
const {Client} = require('pg');

// const pghost = process.env.PGHOST;
// const pguser = process.env.PGUSER;
// const pgdatabase = process.env.PGDATABASE;
// const pgpassword = process.env.PGPASSWORD;
// const pgport = process.env.PGPORT;
const { pg_connectionString } = require('../constant.js');




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
        connectionString: pg_connectionString,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();

    console.log(`seeded done!`);
}

populate();



