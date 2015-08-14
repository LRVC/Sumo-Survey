var express = require('express')
		, router = express.Router()
		, models = require('../models');

router.get('/', function(req, res, next) {
  models.Question.findAll({

  }).then(function(questions) {
  	function getRandomArbitrary(min, max) {
  		return Math.floor(Math.random() * (max - min) + min);
		};
		var randNum = getRandomArbitrary(0, questions.length)
    res.render('index', {
      question: questions[randNum]
    });
  });
});

router.post('/create', function(req, res, next) {
  models.Question.find({
    where: {
      id: req.body.question_id
    }
  }).then(function(question) {
    question.increment(JSON.stringify(req.body.answers));
    res.redirect('/');
  })
});

module.exports = router;
