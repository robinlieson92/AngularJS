var app = angular.module('module_crudapi', ['ngResource']);

app.factory('Bycycle', function($resource) {
    //auth error server "\xA4" ASCII-8BIT to UTF-8
    //fails convert from ascii to utf
    //use window.btoa() , this method will Creates a base-64 encoded ASCII string from a "string" of binary data
    //because in api server only know this encode (if send via header)
    // var auth = window.btoa("dwikuntobayu" + ':' + "12345678");
    var base_url = 'http://localhost:8000/';

    function resRequest(methodType, subDomain, array) {
        return {
            method : methodType,
            url : base_url + subDomain,
            isArray : array,
            headers : {
                //'Authorization' : 'Basic ' + auth,
                'Accept' : 'application/json',
                'Content-Type' : 'application/json; charset=UTF-8',
                // 'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
            },
            params : {
                id : '@id',
                name : '@name',
                series : '@series'
            }
        };
    }

    return $resource('', {}, {
        'index' : resRequest('GET', 'api/v1/bycycles',true),
        'show' : resRequest('GET', 'api/v1/bycycles/:id',false),
        'save' : resRequest('POST', 'api/v1/bycycles',false),
        'update' : resRequest('PUT', 'api/v1/bycycles/:id',false),
        'destroy' : resRequest('DELETE', 'api/v1/bycycles/:id',false),
    });
});

//// create controller that injected services
var app_bycycle = angular.module('bycycle_module', ['module_crudapi']);
app_bycycle.controller('bycycle_controller', function($scope, Bycycle) {
    $scope.bycycle = {};
    console.log($scope.bycycle);
    $scope.save_bycycle = function() {
        $scope.bycycles = Bycycle.save({
            name : $scope.bycycle.name,
            series : $scope.bycycle.series
        });
    };
    $scope.list_bycycles = function() {
        $scope.bycycles = Bycycle.index();
    };
    $scope.show_bycycle = function() {
        $scope.bycycles = Bycycle.show({
            id : $scope.bycycle.id
        });
    };
    $scope.update_bycycle = function() {
        $scope.bycycles = Bycycle.update({
            id : $scope.bycycle.id,
            name : $scope.bycycle.name,
            series : $scope.bycycle.series
        });
    };
    $scope.delete_bycycle = function() {
        if ($scope.bycycle.id == null) {
            $scope.bycycle.id = 0;
        }
        $scope.bycycles = Bycycle.destroy({
            id : $scope.bycycle.id
        });
    };
});
