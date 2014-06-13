'use strict';

angular.module('worldcup2014App')
  .controller('MainCtrl', function ($scope, httpRequest){
    // httpRequest.getRound(1).then(function(data){$scope.round1 = data;});
    httpRequest.getRound().then(function (data) {
      $scope.rounds = data;
    });

  })

  .controller('TopCtrl', function (){
});
