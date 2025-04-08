const pool = require('./pool');

async function getMessages() {
    const result = await pool.query('SELECT * FROM messages');
    return result.rows;
}

async function addMessage(text, user, date) {
    await pool.query('INSERT INTO messages (text, username, date) VALUES ($1, $2 , $3)', [text, user, date]);
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
