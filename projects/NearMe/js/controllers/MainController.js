app.controller('MainController', ['$scope', 'places', function($scope, places) { /*Created new controller named "MainController"*/ /*Used "places" to asynchronously fetch the places data from server and store it into "$scope.geodata" */
$scope.mapCenter = {lat: 40.741934, lng: -74.004897,zoom: 17 }; /* "$scope.mapCenter" is a new property which takes information about map's position*/

  places.success(function(data) {
    $scope.geodata = data;
    $scope.mapMarkers = geodataToMarkers($scope.geodata); /*Use the "geodataToMarkers()" function to format "$scope.geodata", and store that output into '$scope.mapMarkers'*/
  });
 
}]);