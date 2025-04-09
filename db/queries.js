const pool = require('./pool');

async function getMessages() {
    const result = await pool.query('SELECT * FROM messages');
    return result.rows;
}

<<<<<<< HEAD
async function addMessage(text, user) {
    await pool.query('INSERT INTO messages (text, username) VALUES ($1, $2)', [text, user]);
=======
async function addMessage(text, user, date) {
    await pool.query('INSERT INTO messages (text, username, date) VALUES ($1, $2 , $3)', [text, user, date]);
>>>>>>> 86ec19a18f002ecee9d0bcd4828c911eff2a3a6e
}

async function getMessagesDetails(id) {
    const result = await pool.query('SELECT * FROM messages WHERE id = $1', [id]);
    return result.rows[0];
}

module.exports = {
    getMessages,
    addMessage,
    getMessagesDetails
};
