var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
  const res_body = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  };
  res.render('welcome', res_body)
})

module.exports = router;
