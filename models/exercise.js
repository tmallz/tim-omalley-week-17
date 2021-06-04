const mongoose = require('mongoose');

const exercise = new mongoose.Schema({
    type: String,
    name: String,
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number,
},
{
    typeKey: '$type'
});


module.exports = exercise; 