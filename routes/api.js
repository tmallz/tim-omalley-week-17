const router = require("express").Router();
const db = require("../models");


router.get('/api/workouts', async ())

router.get('/api/workouts/range', async (req, res) => {
    let results = await db.Workout.find({}).lean();
    res.json(results);
})

module.exports = router;