var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //description
  res.render('index', { title: 'Bootcam',datas:[] });
});

module.exports = router;
