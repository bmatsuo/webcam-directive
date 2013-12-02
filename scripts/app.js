'use strict';

angular.module('webcamDemo', ['webcam'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/demo', {
          templateUrl: 'views/demo.html',
          controller: 'DemoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
