const express = require('express');
const router = express.Router();
const Workout = require('../models/workout.js');
const mongoose = require('mongoose');

//  GET, PUT, & POST /api/workouts

// router.put('/workouts/:id', (req, res) => {

// });

// GET /api/workouts/range

router.get('/workouts', (req, res) => {
    Workout.find().then((results) => {
      res.json(results);
    })  
      .catch((error)=> {
        res.json(error);
      })
});

router.get('/workouts/:id', (req, res) => {
  Workout.find({_id: req.params.id }).then((results) => {
    res.json(results);
  })
  .catch((error) => {
    res.json(error);
  })
  
});

router.put('/workouts/:id', (req, res) => {
  console.log(req.body);
  Workout.findByIdAndUpdate(
    {_id: req.params.id },
    {
      $push: {"exercises": req.body}
    }
    ).then((ok) => {
    res.json(ok);
  })
  .catch((error) => {
    res.json(error);
  })
  
});

router.post('/workouts', (req, res) => {
  console.log(req.body);
  Workout.create(
    {
      $push: {"exercises": req.body}
    }
    ).then((ok) => {
    res.json(ok);
  })
  .catch((error) => {
    res.json(error);
  })
  
});

module.exports = router;