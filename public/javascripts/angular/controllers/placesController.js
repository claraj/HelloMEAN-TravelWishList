
/* this should....

Fetch and persist (store) changes the model via the places storage service
provides model for the template to display
provides event handlers

 */


var app = angular.module('travelApp'); //get a reference to the app

//And add the controller
app.controller('placesController', ['$scope', '$http', function($scope, $http) {


  $scope.loadPlaces = function() {
    $http.get('/places/allPlaces').success(function(data, status, header, config) {
        $scope.places = data;
      }
    ).error(function(data, status, header, config){
      console.log('Error fetching all places ' + data);
      $scope.place = [];
    });
  };

  $scope.places = $scope.loadPlaces();


  $scope.addNewPlace = function (placeName, newCountry) {
    var newPlace = {
      name: placeName,
      country: newCountry
    };
    //$scope.places.push(newPlace);

    $http.post('/places/newPlace', newPlace)
      .success(function(data, status, headers, config){
        console.log("server reports success and sent..")
        console.log(data);
        $scope.loadPlaces(); //reload list of places.
      })
      .error(function(data, status, headers, config){
        console.log(data + " " + status);
        console.log('error adding new place ' + newPlace );
      })

  };

  //params should end up as parameters to the post req (:postid) ??
//    $http.post('/places/visited', {params : visitedPlace}


  //$http.get('/allPlaces').success(function(data, status, header, config) {
  //    $scope.places = data;
  //  }
  //).error(function(data, status, header, config){
  //  console.log('Error fetching all places ' + data);
  //  $scope.place = [];
  //});

}]);