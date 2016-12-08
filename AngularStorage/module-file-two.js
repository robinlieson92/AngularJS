var moduleCtrl = angular.module('othermodule', ['ngCookies']);

moduleCtrl.controller('othercontroller', function($scope, $cookies) {
    $scope.token = $cookies.get('token');
    $scope.removecookies = function() {
        $cookies.remove('token');
    };
});