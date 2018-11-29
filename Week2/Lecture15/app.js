(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout) {
  $scope.counter = 0;

  $scope.upCounter = function () {
    $timeout(function () {
      $scope.counter++;
      console.log("Counter incremented");
    }, 2000);
  };

  // $scope.upCounter = function () {
  //   setTimeout(function () {
  //     $scope.counter++;
  //     console.log("Counter incremented");
  //     $scope.$digest(); // handles with javascript commands that will not trigger the digester cycle
  // BAD BECAUSE IF THERE IS AN ERROR IN THE PREVIOUS STATEMENT ANGULAR WILL NOT KNOW
  //   }, 2000);
  // };

  // $scope.upCounter = function () {
    //   setTimeout(function () {
      //     $scope.$apply(function () { // Handles with javascript commands that  will not trigger the digester cycle
        // BETTER THEN DIGEST COMMAND
        //       $scope.counter++;
        //       console.log("Counter incremented");
        //     });
        //   }, 2000);
        // };
}

})();
