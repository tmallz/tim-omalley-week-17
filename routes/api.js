const router = require("express").Router();
const db = require("../models");


router.get('/api/workouts', async (req, res) =>{
    let data = await db.Workout.find({}).lean();
    res.json(data);
})

router.get('/api/workouts/range', async (req, res) => {
    let data = await db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: '$exercises.duration'},
            },
        },
    ]);
    if(data.length > 7){
        res.json(data.slice(data.length-7, data.length));
    }else {
        res.json(data);
    }
})

module.exports = router;