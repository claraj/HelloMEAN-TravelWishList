
//TODO extract storage into service.
/* You'd do this to separate the controller from the model.
By having it defined separately, it's easier to change it.
When you start the controller, you'll provide this service as
a dependency. If you want to use a different storage service, then
change it, and everything (should) keep working.

 This is called dependency injection and it's a big deal with Angular.

 */

var app = angular.module('placesApp');
app.factory('placesStorage', function($http, $injector){

  //TODO

});
