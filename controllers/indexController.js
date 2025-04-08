const asyncHandler = require('express-async-handler'); 
const db = require('../db/queries');


async function getAllMessages(req, res) {
    const messages = await db.getMessages();
    console.log(messages);
    res.render('index', {title: "Messages Board", messages: messages});
}

async function form(req, res) {
    res.render('form', {title: "New Message"});
}

async function newMessage(req, res) {
    const text = req.body.text;
    const user = req.body.user;
    await db.addMessage(text, user);
    res.redirect('/');
}

async function details(req, res) {
    const id = req.params.id;
    const message = await db.getMessagesDetails(id);
    res.render('details', {title: "Message Details", message: message});
}

module.exports = {
  getAllMessages,
    form,
    newMessage,
    details
};