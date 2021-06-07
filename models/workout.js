const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workout = new Schema({
    day: {
        type: Date, 
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'Must choose a type'
        },
        name: {
            type: String, 
            trim: true, 
            required: 'Must enter a name'
        },
        duration: {
            type: Number, 
            required: 'Must enter a duration (min)'
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});

const Workout = mongoose.model('workout', workout);

module.exports = Workout;


