"use strict";
app.config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/',{
        controller: 'mainController'
      }).otherwise({redirectTo:'/'});
    }
]);
