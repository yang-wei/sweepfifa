'use strict';

var app = angular
  .module('worldcup2014App', [
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'duScroll'
  ])

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/top', {
        templateUrl: 'views/schedule.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/top'
      });
  })






