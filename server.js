const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useFindAndModify: false
});

app.get('/api/workouts', async (req, res) =>{
  let data = await db.Workout.find({}).lean();
  res.json(data);
});

app.post('/api/workouts', async(req, res) => {
  let workout = {
      day: new Date(),
      exercise: [],
  }
  let newWorkout = await db.Workout.create(workout);
  res.json(newWorkout);
});

app.put('/api/workouts/:id', async (req, res) =>{
let updateWorkout = await db.Workout.update(
    {_id: req.params.id}, 
    {
        $push: {excersises: req.body},
    }
);
res.json(updateWorkout);
});

app.get('/api/workouts/range', async (req, res) => {
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
});

// routes
app.use(require("./routes/"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
