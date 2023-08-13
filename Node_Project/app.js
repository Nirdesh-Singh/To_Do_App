// Making use of ExpressJS to make routes and everything

const express = require('express'); // to import any package use require keyword

const body_parser = require('body-parser');
const userRouter = require('./routers/user.router');
const todoRouter = require('./routers/todo.router');
const app = express(); // creating an instance of express

app.use(body_parser.json());

app.use('/', userRouter);
app.use('/', todoRouter);

module.exports = app; // export our app, make us of app.js anywhere in project

