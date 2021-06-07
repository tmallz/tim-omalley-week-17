const router = require("express").Router();
const Workout = require("../models/workout.js");


router.get('/api/workouts', async (req, res) =>{
    await Workout.aggregate([{
        $addFields: {
            totalDuration: {$sum: '$exercises.duration'}
        }
    }])
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.post('/api/workouts', async (req, res) => {
    await Workout.create({})
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put('/api/workouts/:id', async ({body, params}, res) =>{
    await Workout.findByIdAndUpdate(
        params.id,
        {$push: {exercises: body} },
        {new: true, runValidators: true}
    )
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.status(400).json(err)
    });
});

router.get('/api/workouts/range', async (req, res) => {
    await Workout.aggregate([{
        $addFields: {
            totalDuration: {$sum: '$exercises.duration'}
        }
    }])
    .sort({_id: -1}).limit(7)
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.status(400).json(err)
    });
});

module.exports = router;