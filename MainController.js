app.controller('MainController', ['$scope', function ($scope) {
        $scope.summOfTwo = function(){
        return document.getElementById("number1").value*1 + document.getElementById("number2").value*1;

        // also can make such
        //return $scope.number1 + $scope.number2
        };
}]);