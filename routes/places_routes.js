var express = require('express');
var router = express.Router();
//Routes that the Angular client code will call
//to get a list of places, add a new place, update a place as visited

var Place = require('../models/places');

router.post('/newPlace', function(req, res, next){

  console.log('new place creation, req.body is...');
  console.log(req.body);  //params?
  //console.log(req.params);

  var newPlace = new Place(req.body);  //todo validation
  newPlace.save(function(err, place){
    if (err) {
      console.log("error! " + err);
      next(err)
    }
    console.log('new place: ' + place );

    res.json(place);
    //you may need to send the newly created Place back.
    //Maybe the client needs the _id value, or some other data
    //your server created.
    //if not, then
     //res.sendStatus(200);
    //will also tell the client that it was saved successfully.
  })

});


/*
 http://stackoverflow.com/questions/19254029/angularjs-http-post-does-not-send-data

* $http.post('request-url',  message);
 Another form which also works is:

 $http.post('request-url',  { params: { paramName: value });
 Make sure that paramName exactly matches the name of the parameter of the function you are calling.*/

router.post('/visited/:placeid', function(req, res, next){

  var _id = req.params.placeid;
  Place.findByIdAndUpdate( _id, { visited : true }, function(err, place){
    if (err) {
      return next(err);
    }
    if (!place) {
      res.json(404, 'Place ID not found');
    }
    res.json(place)
  });

});


router.get('/allPlaces', function(req, res, next){

  console.log('hello from allPlaces!');

  Place.find().exec(function(err, places){
    if (err) {
      return next(err);
    }

    if (!places) {
      places = []
    }

    res.json(places);

  })
});


router.get('/allPlacesToVisit', function(req, res, next){
  Place.find({visited : false}).exec(function(err, places){
    if (err) {
      return next(err);
    }

    if (!places) {
      places = []
    }
    res.json(places);

  })
});

router.get('/allPlacesVisited', function(req, res, next){
  Place.find({visited : true}).exec(function(err, places){
    if (err) {
      return next(err);
    }

    if (!places) {
      places = []
    }
    res.json(places);

  })
});

module.exports = router;