var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

/* GET home page. */
router.get('/user/select', function(req, res, next) {
  res.render('index', { title: 'Express1'});
});


module.exports = router;
