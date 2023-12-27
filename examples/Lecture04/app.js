(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
    $scope.name = '';
    $scope.totalValue = 0;

    $scope.displayNumber = function () {
        var totalNumericValue = calculateString($scope.name);
        $scope.totalValue = totalNumericValue;
    }
    function calculateString(string) {
        var totalStringValue = 0;
        for (var i = 0; i < string.length; i++) {
            totalStringValue += string.charCodeAt(i);
        }
        return totalStringValue;
    }
});

})();
