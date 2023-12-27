(function() {
    angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.foods = "";
        $scope.limit = "";
        $scope.withinLimit = "Enjoy";
        $scope.overLimit = "Too much!";

        $scope.isInLimit = function () {
            var isFoodInLimit = haveIOverEaten($scope.foods);
            $scope.limit = isFoodInLimit;
        }

        function haveIOverEaten(foods) {
            let foodArray = foods.split(',');
            console.log(foodArray);
            if(foodArray.length <= 3){
                return $scope.withinLimit;
            } else{
                return $scope.overLimit;
            }
        }
    }
})();