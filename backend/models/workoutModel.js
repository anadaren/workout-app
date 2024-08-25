const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// creates Schema
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

// creates model based on Schema
module.exports = mongoose.model('Workout', workoutSchema);

workoutSchema.find();