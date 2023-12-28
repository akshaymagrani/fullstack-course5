(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('likes', MyLoveFilter);

MsgController.$inject = ['$scope', 'likesFilter'];
function MsgController($scope, likesFilter) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";

  $scope.showNoOfWatchers = function() {
    console.log($scope.$$watchersCount);
  }
  

  $scope.sayMessage = function () {
    return "Yaakov likes to eat healthy snacks at night!";
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };

  $scope.sayLoveMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    msg = likesFilter(msg, 'likes', 'loves');
    return msg;
  };
}
function MyLoveFilter() {
  return function (input, target, replace) {
    input = input || "";
    input = input.replace(target, replace);
    return input;
  };
}

})();
