var express = require('express');
var router = express.Router();
var data = require('./data')

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

module.exports = router;
