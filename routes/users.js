var express = require('express');
var router = express.Router();

// Connection to json
const data = require('../data.json');

//Get projects from json
const project = data.projects;



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router

module.exports = router;
