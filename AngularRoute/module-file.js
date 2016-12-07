//// Setup routes for handle redirect and reload page
var moduleRoutes = angular.module('modroutes', ['ngRoute']);

moduleRoutes.controller('ctrlmain', function($scope, $route, $routeParams, $location){
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});

moduleRoutes.controller('ctrlsvcstwo', function($scope, $routeParams) {
    $scope.name = "Me from controller ctrlSvcsTwo";
    $scope.params = $routeParams;
});

moduleRoutes.controller('ctrlsvcsthree', function($scope, $routeParams) {
    $scope.name = "Me from controller ctrlSvcsThree";
    $scope.params = $routeParams;
});

moduleRoutes.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'index.html'
        })
        .when('/AngularJS/AngularRoute/svcs-two', {
            templateUrl: '/AngularJS/AngularRoute/svcs-two.html',
            controller: 'ctrlsvcstwo'
        })
        .when('/AngularJS/AngularRoute/svcs-three/:id', {
            templateUrl: '/AngularJS/AngularRoute/svcs-three.html',
            controller: 'ctrlsvcsthree'
        });
        // .otherwise({redirectTo: '/'});

    //// configure html5 to get links working on jsfiddle
    //// if only use below code route will cause error require base tag
    //// $locationProvider.html5Mode(true);
    //// this code is working
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

