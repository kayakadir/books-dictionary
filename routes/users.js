var express = require('express');
const uniqid = require('uniqid');
var router = express.Router();

let usersArr = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(usersArr)
  res.send(usersArr);
});

router.post('/', (req, res) => {
  const id = uniqid()
  const newItem = {id: id, ...req.body}
  usersArr.push(newItem)
  res.render('index', {title: 'User Added'})
})

module.exports = router;
