var moduleCtrl = angular.module('modLocalStorage', ['ngStorage']);

moduleCtrl.controller('ctrlLocalStr', function($scope, $localStorage) {
    $scope.storage = $localStorage.$default({
        username: "Dwikuntobayu",
        age: 17
    });
});
