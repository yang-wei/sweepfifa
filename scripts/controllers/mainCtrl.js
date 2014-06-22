'use strict';

  app.controller('MainCtrl', function ($scope, httpRequest, $document, ProgressIndicator){
    // httpRequest.getRound(1).then(function(data){$scope.round1 = data;});
    
    ProgressIndicator.startSpinner();

    httpRequest.getRound().then(function (data) {
      	$scope.rounds = data;
        ProgressIndicator.stopSpinner();
      });

    $scope.scrollToTop = function () {
    	$document.scrollTop(0, 1000);
    };

    var playoff = angular.element(document.getElementById('pos16'));
    var groupstage = angular.element(document.getElementById('pos1'));
    var about = angular.element(document.getElementById('about'))
    $scope.toPlayoff = function() {
        $document.scrollTo(playoff, 0, 2000);
      };

    $scope.toGroupStage = function() {
    	$document.scrollTo(groupstage, 0, 1500);
    };

    $scope.toAbout = function() {
    	$document.scrollTo(about, 0, 3000);
    };
  })
