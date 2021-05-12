const express = require('express');
const router = express.Router();

// route to display HTML
// router.get('/', async (req, res) => {
//     const continueWorkout = await Workout.findAll().catch((err) => { 
//       console.log(continueWorkout);
//         res.json(err);
//       });
//         const lastWorkout = continueWorkout.map((workout) => workout.get({ plain: true }));
//         res.render('index', { continueWorkout});
//       });

module.exports = router;