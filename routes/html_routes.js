const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const { db } = require('../models/workout');
const path = require('path');

// route to display HTML

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

module.exports = router;