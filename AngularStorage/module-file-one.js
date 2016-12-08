var moduleCtrl = angular.module('moduletrycookies', ['ngCookies']);

//example cookies
moduleCtrl.controller('crtltrycookies', function($scope, $cookies) {
    var now = new Date();
    var expireDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 2, now.getMinutes());
    $cookies.put('token', '234lkj2l3498sfkj345hkjhfwr', {'expires': expireDate});
});

//example session
var moduleCtrl = angular.module('moduletrycookies', ['ngCookies']);
    moduleCtrl.controller('crtltrycookies', function($scope, $cookies) {
    $cookies.put('token', '234lkj2l3498sfkj345hkjhfwr');
});
