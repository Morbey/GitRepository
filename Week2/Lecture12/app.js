(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController)
  .filter('loves', LovesFilter)
  .filter('truth', TruthFilter);

  MsgController.$inject = ['$scope', 'lovesFilter'];
  function MsgController ($scope, lovesFilter) {
    $scope.name = "Eduardo";
    $scope.stateOfBeing = "hungry";

    $scope.sayMessage = function() {
      var msg = "Eduardo likes to eath healthy snacks at night! :)";
      return msg;
    }

    $scope.sayLovesMessage = function() {
      var msg = "Eduardo likes to eat healthy snacks at night! :)";
      msg = lovesFilter(msg);
      return msg;
    }

    $scope.feedEduardo = function() {
      $scope.stateOfBeing = "fed";
    }
  }

  function LovesFilter() { //factory filter
    return function(input) {
      input = input || "";
      input = input.replace("likes", "loves");
      return input;
    }
  }

  function TruthFilter() {
    return function(input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    }
  }
})();
