var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function PlayerBio() {
  $.ajax({
    url:'/Person/Edit/@Model.Id/',
    type:'post',
    data: $('#playerbio').serialize(),
    success() {
      alert("worked");
    }
  });
}

module.exports = router;
