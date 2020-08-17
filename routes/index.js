var express = require('express');
var router = express.Router();

// Connection to json
const data = require('../data.json');

//Get projects from json
const projects = data.projects;

/* GET home page with data projects */
router.get('/', function(req, res, next) {
  res.render('index', { projects });
});

//Render  Project template
router.get('/projects/:id', (req, res) => {
  const {id} = req.params;
  const project = projects[id];
  //If a character/string or a number larger than the amount of projects is entered
  if (isNaN(id) || id > projects.length) {
    //Then redirect to main page
    return res.redirect('/');
  }
  //Otherwise show the selected project
  res.render('project', { project });
});

//Render the "About" page
router.get('/about', (req, res) => {
  
  res.render('about');
});
module.exports = router;
