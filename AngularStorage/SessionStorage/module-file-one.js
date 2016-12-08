var moduleCtrl = angular.module('modSessionStorage', ['ngStorage']);

moduleCtrl.controller('ctrlSessionStr', function($scope, $sessionStorage) {
    $scope.cart = $sessionStorage.$default({
        itemOne: "NoteBook"
    });
});
