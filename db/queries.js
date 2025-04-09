const pool = require('./pool');

async function getMessages() {
    const result = await pool.query('SELECT * FROM messages');
    return result.rows;
}


async function addMessage(text, user) {
    await pool.query('INSERT INTO messages (text, username) VALUES ($1, $2)', [text, user]);

}


async function getMessagesDetails(id) {
    const result = await pool.query('SELECT * FROM messages WHERE id = $1', [id]);
    return result.rows[0];
    }




module.exports = {
    getMessages,
    addMessage,
    getMessagesDetails,
    
};
