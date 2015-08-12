var express = require('express')
		, router = express.Router()
		, methodOverride = require('method-override')
    , bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}));

router.get('/', function(req, res) {
  res.render('question/question');
});

router.get('/new', function(req, res) {
	res.render('question/new');
});

module.exports = router;
