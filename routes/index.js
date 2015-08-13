var express = require('express')
		, router = express.Router()
		, models = require('../models');

router.get('/', function(req, res, next) {
  models.Question.findAll({

  }).then(function(questions) {
    res.render('index', {
      questions: questions
    });
  });
});

module.exports = router;
