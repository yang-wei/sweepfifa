'use strict';

angular
  .module('worldcup2014App', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/top', {
        templateUrl: 'views/schedule.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/top'
      });
  })


  .run(function($rootScope, $location, $anchorScroll, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
      $location.hash($routeParams.scrollTo);
      $anchorScroll();
    });
  })

  .value('dbURL', 'https://rawgit.com/yang-wei/6893650a81087ad1a658/raw/0079e628b77f016aff0695c4f938343f2849369d/worldcup2014db.json')


  .factory('httpRequest', function($http, dbURL) {
    return {
      getRound: function() {
        return $http.get(dbURL)
        .then(function(result) {
              return result.data
        });
      }
    };
  })

  .filter('strToInt', function() {
    return function(input) {
      return parseInt(input);
    }
  });