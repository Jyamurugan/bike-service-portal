var express = require('express');
var router = express.Router();
var data = require('./data');
var sendEmail = require('./email');

/* GET home page. */
router.get('/', function(req, res, next) {
  const { customer, service, vehicle, contact, location } = req.query;
  console.log(customer, service, vehicle, contact, location);
  if(customer, service, vehicle, contact, location) {
    sendEmail(customer, service, location, contact);
    res.redirect('/thanks/confirmation');
  } else {
    res.status(404).send();
  }
});

router.get('/confirmation', function(req, res, next) {
  res.render('thanks', { address: data.addressInfo });
});

module.exports = router;
