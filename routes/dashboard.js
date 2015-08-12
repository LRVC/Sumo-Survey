var express = require('express')
		, router = express.Router()
    , models = require('../models');

router.get('/', function(req, res) {
  models.Question.findAll({

  }).then(function(questions) {
    res.render('dashboard', {
      questions: questions
    });
  });
});

module.exports = router;
