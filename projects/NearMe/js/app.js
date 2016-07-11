var app = angular.module('NearMeApp', ['leaflet-directive', 'ngRoute']); /*created new module named NearMeApp*/ /*Injected "leaflet-directive", "ngRoute" into the dependency array so that the app can use*/
app.config(function ($routeProvider) { /* "app.config", "$routeProvider" are used to set up routes*/
  $routeProvider
  .when('/', { /*Map the URL "/" to controller & templateUrl*/
    controller: 'MainController',
    templateUrl: 'views/main.html'
  })
  .when('/about', { /*Map the URL "/about" to controller & templateUrl*/
    controller: 'AboutController',
    templateUrl: 'views/about.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});