var express = require('express')
		, router = express.Router()
    , models  = require('../models');

router.get('/', function(req, res) {
  res.render('question/question');
});

router.get('/new', function(req, res) {
	res.render('question/new');
});

router.post('/create', function(req, res) {
  models.Question.create({
    question_body: req.body.question,
    answer_a: req.body.answer_a,
    answer_b: req.body.answer_b,
    answer_c: req.body.answer_c,
    answer_d: req.body.answer_d
  }).then(function() {
    res.redirect('/dashboard');
  });
});

module.exports = router;
