var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Video Chat' });
});

/* GET room page. */
router.get('/r/:roomName', function (req, res, next) {
  res.render('room', { roomName: req.params.roomName });
});

/* GET after left page. */
router.get('/left_meet', function (req, res, next) {
  res.render('left', { title: 'Video Chat' });
});
module.exports = router;
