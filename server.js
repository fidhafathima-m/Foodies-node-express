const express = require('express');
const app = express();
const hbs = require('hbs');
const session = require('express-session');
const nocache = require('nocache');
const path = require('path');

app.use(express.static('public'));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.set('view engine', 'hbs');


app.use(express.urlencoded({ extented: true }));
app.use(express.json());

const userRouter = require('./routes/user')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use(nocache());

app.use('/', userRouter);



app.listen(8000, () => console.log("Server running on port 8000"));