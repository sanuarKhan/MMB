const asyncHandler = require('express-async-handler'); 
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

const indexController = {

  index:asyncHandler( (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages });
  }),
  form:asyncHandler( (req, res) => {
    res.render('form', { title: 'Messageboard' });
  }),

  newMessage: asyncHandler((req, res) => {
    const { text, user } = req.body;
    messages.push({ text, user, added: new Date() });
    res.redirect('/');
  }),
  details: asyncHandler((req, res) => {
    res.render('details', { title: 'Message Details', message: messages[req.params.id] });
  } )
};

module.exports = indexController;