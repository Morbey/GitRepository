(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController ($scope) {
    $scope.name = "Eduardo";
    $scope.stateOfBeing = "hungry";

    $scope.sayMessage = function() {
      return "Eduardo likes to eath healthy snacks at night! :)"
    }

    $scope.feedEduardo = function() {
      $scope.stateOfBeing = "fed";
    }
  }
})();
