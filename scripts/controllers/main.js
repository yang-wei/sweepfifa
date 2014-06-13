'use strict';

angular.module('worldcup2014App')
  .controller('MainCtrl', function ($scope, httpRequest, $timeout){
    // httpRequest.getRound(1).then(function(data){$scope.round1 = data;});
    $timeout( function () {
    	httpRequest.getRound().then(function (data) {
      	$scope.rounds = data;
    	});
    })
  })
