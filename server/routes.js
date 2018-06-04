const userController = require('./controllers/userController');
const quizController = require('./controllers/quizController');

module.exports =(app) =>{

    //preflight error
    app.options('/api/*', (req, res) => res.status(201).end());

    app.get('/', (req, res) =>{
        res.send('Hello Backend');
    });

    //Register and login routes
    app.post('/api/user/signup', userController.signupUser);
    app.post('/api/user/login', userController.loginUser);
    

    // Quiz temporary routes
    app.post('/api/quiz/create',  quizController.createQuiz);
    app.post('/api/quiz/addQuestion',  quizController.addQuestionToQuiz)
    app.get('/api/quiz/get-quiz-list',  quizController.getQuizList);
    

}