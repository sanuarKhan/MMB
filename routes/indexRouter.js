const { Router } = require('express');
const { getAllMessages, form, newMessage, details } = require('../controllers/indexController');



const indexRouter = Router();


indexRouter.get('/', getAllMessages);
indexRouter.get('/new', form);
indexRouter.post('/new', newMessage);
indexRouter.get('/details/:id', details);

module.exports = indexRouter;