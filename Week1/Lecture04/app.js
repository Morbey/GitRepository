//IIFE Immediately Invoked Function Expression
//Bind this app.js file to the index.html where it has the ng-app="myFirstApp"
(function () {
  'use strict'; //Avoids the declaration of global variables if they are not instantiated in the class
  angular.module('myFirstApp', [])

  //Controller bind to index.html div where it has ng-controller="MyFirstController"
  .controller('MyFirstController', function($scope) { // $ is reserved for angular variables
    $scope.name = "Morbey";
    $scope.sayHello = function () {
      return "Hello Coursera!";
    }
  });
})();
