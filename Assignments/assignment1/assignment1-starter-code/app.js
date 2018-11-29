(function() {
  'use strict';

  angular.module('LunchCheck', []).
  controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController ($scope, $filter) {
    $scope.checkIfTooMuch = function() {
      var list = $scope.dishList.split(",");
      var listLength = $filter('filter')(list, String).length;

      if (listLength == 0) {
        $scope.LunchCheckerMsg = "Please enter data first";
      }
      else if (listLength > 0 && listLength <= 3) {
        $scope.LunchCheckerMsg = "Enjoy!";
      }
      else if (listLength > 0) {
        $scope.LunchCheckerMsg = "Too much!";
      }
    }
  }
})();
