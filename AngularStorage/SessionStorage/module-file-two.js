var moduleCtrl = angular.module('otherModule', ['ngStorage']);

moduleCtrl.controller('otherController', function($scope, $sessionStorage) {
    $scope.cart = $sessionStorage;
});
