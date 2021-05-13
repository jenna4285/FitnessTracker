const express = require ('express');
const router = express.Router();
const logger = require('morgan');
const mongoose = require('mongoose');
// const mongojs = require('mongojs');
const path = require('path');

// const chartjs

const PORT = process.env.PORT || 3001;

const db = require("./models");
const routes = require('./routes');

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.use(express.static("public"));

mongoose.connect('mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });