var http_module = angular.module('httpExample', []);

http_module.controller('httpBycycle', function($scope, $http) {
    // var auth = window.btoa("dwikuntobayu" + ':' + "12345678");
    var base_url = 'http://localhost:8000/';
    $scope.bycycle = {};

    function httpRequest(methodType, subDomain, inputData) {
        return {
            method: methodType,
            url: base_url + subDomain,
            headers: {
                // 'Authorization' : 'Basic ' + auth,
                'Accept' : 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
            },
            data: inputData
        };
    }

    $scope.save = function() {
        $http(httpRequest('POST', 'api/v1/bycycles', $scope.bycycle)).then(
            function (resSuccess){
                $scope.bycycles = resSuccess.data;
            },
            function (resError){
                console.log(resError);
            }
        );
    };

    $scope.index = function() {
        $http(httpRequest('GET', 'api/v1/bycycles')).then(
            function (resSuccess){
                $scope.bycycles = resSuccess.data;
            },
            function (resError){
                console.log(resError);
            }
        );
    };

    $scope.show = function() {
        $http(httpRequest('GET', 'api/v1/bycycles/' + $scope.bycycle.id)).then(
            function (resSuccess){
                $scope.bycycles = resSuccess.data;
            },
            function (resError){
                console.log(resError);
            }
        );
    };

    $scope.update = function() {
        $http(httpRequest('PUT', 'api/v1/bycycles/' + $scope.bycycle.id, $scope.bycycle)).then(
            function (resSuccess){
                $scope.bycycles = resSuccess.data;
            },
            function (resError){
                console.log(resError);
            }
        );
    };

    $scope.delete = function() {
        $http(httpRequest('DELETE', 'api/v1/bycycles/' + $scope.bycycle.id)).then(
            function (resSuccess){
                $scope.bycycles = resSuccess.data;
            },
            function (resError){
                console.log(resError);
            }
        );
    };
});
