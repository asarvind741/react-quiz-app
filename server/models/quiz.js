const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quizSchema = new Schema({
    quizName: {
        type: String,
        unique:true,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Quiz', quizSchema)