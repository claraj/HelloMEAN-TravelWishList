
/* this should....

Fetch and persist (store) changes the model via the places storage service
provides model for the template to display
provides event handlers

 */


var app = angular.module('travelApp'); //get a reference to the app

//And add the controller
app.controller('placesController', function placesController($scope){

  //TODO - example data. Replace with data from model
  var places = [ { name: "Cairo", country:"Egypt"}, {name: "Tokyo", country:"Japan"} ];


  $scope.places = places;

  $scope.addNewPlace = function(placeName, newCountry ) {
    var newPlace = {
      name: placeName,
      country : newCountry
    };
    $scope.places.push(newPlace);

  }

})