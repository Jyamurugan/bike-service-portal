var express = require('express');
var router = express.Router();
var data = require('./data');
var sendEmail = require('./email');

/* GET home page. */
router.get('/services', function(req, res, next) {
    if(req.query && req.query.id) {
        res.send({
            service: data.servicesOffered.find(service => service.code === req.query.id)
        });
    } else {
        res.status(404).send({
            error: 'Service Not Found'
        })
    }
});

router.get('/send-email', function(req, res, next) {
    if(req.query) {
        const { customer, service, location, contact } = req.query;
        sendEmail(customer, service, location, contact);
        res.send('<p>Done</p>')
    } else {
        res.status(404).send({
            error: 'Service Not Found'
        })
    }
});

module.exports = router;
