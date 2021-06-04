const app = require("express");
const db = require("../models");


// app.get('/api/workouts', async (req, res) =>{
//     let data = await db.Workout.find({}).lean();
//     res.json(data);
// });

// app.post('/api/workouts', async(req, res) => {
//     let workout = {
//         day: new Date(),
//         exercise: [],
//     }
//     let newWorkout = await db.Workout.create(workout);
//     res.json(newWorkout);
// });

// app.put('/api/workouts/:id', async (req, res) =>{
//   let updateWorkout = await db.Workout.update(
//       {_id: req.params.id}, 
//       {
//           $push: {excersises: req.body},
//       }
//   );
//   res.json(updateWorkout);
// });

// app.get('/api/workouts/range', async (req, res) => {
//     let data = await db.Workout.aggregate([
//         {
//             $addFields: {
//                 totalDuration: {$sum: '$exercises.duration'},
//             },
//         },
//     ]);
//     if(data.length > 7){
//         res.json(data.slice(data.length-7, data.length));
//     }else {
//         res.json(data);
//     }
// })

module.exports = app;