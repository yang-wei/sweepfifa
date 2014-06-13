'use strict';

angular
  .module('worldcup2014App', [
    'ngResource',
    'ngRoute',
    'ngAnimate'
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

  .value('dbURL', 'https://cdn.rawgit.com/yang-wei/6893650a81087ad1a658/raw/')


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

  // custom filter to sort the epoch date
  .filter('customSort',function(){
    function sort (a, b) {
        if (a > b) { return 1; }
        if (a < b) { return -1; }

        return 0;
    }

    return function(arrInput, prop) {
        var arr = arrInput.sort(function(a, b) {
            return sort(+a[prop], +b[prop]);
        });
        return arr;
    }
  })

  




