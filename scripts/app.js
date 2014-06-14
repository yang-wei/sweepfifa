'use strict';

angular
  .module('worldcup2014App', [
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'duScroll'
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

  .value('dbURL', 'https://dl.dropboxusercontent.com/s/4zyu1bawtbr5m75/worldcup2014db.json')


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





