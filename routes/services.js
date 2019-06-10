var express = require('express');
var router = express.Router();

const availableServices = [
  {
    name: 'Package I, (450)',
    value: 'Package I, (450)',
    description: 'Water Service, 3M Polish and Oil Lubrication'
  },
  {
    name: 'Package II (1699)',
    value: 'Package II (1699)',
    description: 'Engine Oil, Oil Filter, Water wash, Oil Lubrication with Polish'
  },
  {
    name: 'General Service I (999)',
    value: 'General Service I (999)',
    description: 'Scooter General Service'
  },
  {
    name: 'General Service II (1499)',
    value: 'General Service II (1499)',
    description: 'General Service for 100cc to 180cc bikes'
  },
  {
    name: 'Premium Service (1999)',
    value: 'Premium Service (1999)',
    description: 'Engine Oil, Air Filter, Electrical checkup, Carburetor Cleaning, Engine Tuning, Oil Lubrications, Brakes Cleaning, Water Wash, 3M Polish'
  },
  {
    name: 'PACKAGE III (4199)',
    value: 'PACKAGE III (4199)',
    description: 'Premium Service with Chain Sprocket Change'
  },
  {
    name: 'Full Restore I (29999)',
    value: 'Full Restore I (29999)',
    description: 'Single Color Painting and Plating'
  },
  {
    name: 'Full Restore II (49999)',
    value: 'Full Restore II (49999)',
    description: 'Full Restore with Engine Work, Painting, Plating'
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query && req.query.selectedService) {
    res.render('services', { services: availableServices, selectedService: req.query.selectedService });
  } else {
    res.render('services', { services: availableServices });
  }
});

module.exports = router;
