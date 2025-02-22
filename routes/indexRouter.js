const { Router } = require('express');

const indexController = require('../controllers/indexController');

const indexRouter = Router();


indexRouter.get('/', indexController.index);
indexRouter.get('/new', indexController.form);
indexRouter.post('/new', indexController.newMessage);
indexRouter.get('/details/:id', indexController.details);

module.exports = indexRouter;