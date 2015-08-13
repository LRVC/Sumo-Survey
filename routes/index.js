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
  	console.log(randNum);
    res.render('index', {
      question: questions[randNum]
    });
  });
});

router.post('/create', function(req, res, next) {
  var answer = req.body.answer
  models.Question.find({
    
  })
	res.redirect('/');
});

module.exports = router;
