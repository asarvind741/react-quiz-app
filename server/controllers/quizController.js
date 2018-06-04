const Quiz = require('../models/quiz');
const quizQuestion = require('../models/question')
let getQuizList = (req, res) => {

    var quizList = {};

    Quiz.find({}, (err, quizes) => {

        quizes.forEach(quiz => {
            quizList[quiz._id] = quiz.quizName;

        });

        res.json(quizList);
    })
}

let createQuiz = (req, res) => {
    if (!!req.body.quizName) {
        Quiz.findOne({ quizName: req.body.quizName }, (err, quiz) => {
            if (err) {
                res.status(500).json(err);
            }
            else if (!!quiz) {
                res.status(500).json({ Message: 'Quiz with this name already exists' })
            }
            else {
                Quiz.create({
                    quizName: req.body.quizName
                }, (err, quiz) => {
                    if (err) {
                        res.status(500).json(err);
                    }
                    else {
                        res.json({ quiz })
                    }
                })
            }
        })
    }
    else {
        res.status(400).json({ error: "Invalid Field" })
    }
}

let addQuestionToQuiz = (req,res) => {
    quizQuestion.create(
        req.body
    ).then((success) => {
        res.json(success);
    })
    .catch((error) => {
        res.json(error);
    })

}

module.exports = {
    getQuizList,
    createQuiz,
    addQuestionToQuiz
}