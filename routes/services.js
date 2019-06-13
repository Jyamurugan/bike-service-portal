var express = require('express');
var router = express.Router();
var data = require('./data');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query && req.query.selected) {
    res.render('services', { services: data.servicesOffered, selectedService: req.query.selected });
  } else {
    res.render('services', { services: data.servicesOffered });
  }
});

module.exports = router;
