'use strict';

var myApp = angular.module('Debt', ['duScroll']);

myApp.controller('TabsCtrl', ['$scope', function($scope) {
  $scope.tabs = ['Canadian Debt Relief', 'How Does It Work?', 'What Types of Debt Qualify?', 'Why Choose Debt.ca?', 'Why Should I Avoid Bankruptcy?', 'How Do I Get Started?'];
  
  $scope.currentTab = $scope.tabs[0];

  $scope.changeTitle = function (index) {
    $scope.currentTab = $scope.tabs[index];
  };
}]);

myApp.controller('GetStartedCtrl', ['$scope', '$log', function($scope, $log) {
  $scope.formData = {};
  $scope.estimateData = {};
  $scope.showFirst = true;
  $scope.showSpinner = false;
  $scope.showLast = false;
  $scope.title = 'Get Started Now';

  
  $scope.submitQualify = function (isValid) {
    if (isValid) {
      $scope.showFirst = false;
      $scope.showSpinner = true;
      $scope.showSpinner = false;
      $scope.title = 'you qualify for a free analysis!';
      $scope.showLast = true;
    }
  };

  $scope.getEstimate = function (isValid) {
    if (isValid) $log.log($scope.estimateData);
  };
}]);

myApp.directive('owlSingle', [function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      element.owlCarousel({
        autoPlay: true,
        singleItem: true
      });
    }
  };
}]);

myApp.directive('popover', [function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      element.popover();
    }
  };
}]);