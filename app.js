const express = require('express');
const path = require('path');
const indexRouter = require('./routes/indexRouter');


const app = express();

//middleware
app.use( express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//router middleware
app.use('/', indexRouter);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});