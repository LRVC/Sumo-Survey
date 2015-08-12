var express = require('express')
		, router = express.Router()
		, methodOverride = require('method-override');

router.get('/', function(req, res, next) {
  res.render('dashboard');
});

module.exports = router;
