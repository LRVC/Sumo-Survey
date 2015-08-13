var express = require('express')
		, router = express.Router()
    , models  = require('../models');

router.get('/', function(req, res) {
  res.render('question/question');
});

router.get('/new', function(req, res) {
	res.render('question/new');
});

router.post('/new', function(req, res) {
  models.Question.create({
    question_body: "Test Question",
    answer_a: "Answer A",
    answer_b: "Answer B",
    answer_c: "Answer C",
    answer_d: "Answer D"
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;
