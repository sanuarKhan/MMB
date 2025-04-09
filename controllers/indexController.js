const asyncHandler = require('express-async-handler'); 
const db = require('../db/queries');


async function getAllMessages(req, res) {
    const messages = await db.getMessages();
   
    res.render('index', {title: "Messages Board", messages: messages});
}

async function form(req, res) {
    res.render('form', {title: "New Message"});
}

async function newMessage(req, res) {
    const text = req.body.text;
    const username = req.body.user;
    
    await db.addMessage(text, username);
    res.redirect('/');
}

async function details(req, res) {
    
    let id = req.params.id;
    console.log(id);
    if (id === '0') {
        id = '1';
    }
    console.log(id)
    const message = await db.getMessagesDetails(id);
    console.log(message);
    if (message === undefined) {
        return res.status(404).send('Message not found');
    }
    res.render('details', {title: "Message Details", message: message});
}

module.exports = {
  getAllMessages,
    form,
    newMessage,
    details
};