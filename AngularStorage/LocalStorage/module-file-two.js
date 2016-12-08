var moduleCtrl = angular.module('otherModule', ['ngStorage']);
moduleCtrl.controller('otherController', function($scope, $localStorage) {
    $scope.storage = $localStorage;
}); 
