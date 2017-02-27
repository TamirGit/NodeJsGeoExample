var express = require('express');
var router = express.Router();

var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyChhfRpFm8TKSlDJAcFybOoiEFbW9w0eHE'
});

/* GET home page. */
router.get('/:address', function(req, res, next) {
    // Geocode an address.
    googleMapsClient.geocode({
        address: req.params.address
    }, function(err, response) {
        if (!err) {
            res.render('index', { lat: response.json.results[0].geometry.location.lat,
                                  lng: response.json.results[0].geometry.location.lng});
            console.log(response.json.results[0].geometry.location);
        }
    });
});

module.exports = router;