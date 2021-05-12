const express = require ('express');
const router = express.Router();
const logger = require('morgan');
const mongoose = require('mongoose');

// const chartjs

const PORT = process.env.PORT || 3000;

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

// Write Routes

// Add exercises to the most recent workout plan.

// Add new exercises to a new workout plan.

// View the combined weight of multiple exercises from the past seven workouts on the stats page.

// View the total duration of each workout from the past seven workouts on the stats page.

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });