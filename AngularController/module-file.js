var app = angular.module('appModule',[]);

// example controller
app.controller('appCtrlUser',function($scope){
	$scope.name="Robin Lieson";
	$scope.job="Web Programmer";
	$scope.skills=["Ruby on Rails","Laravel 5", "Android"];

	$scope.rename = function(newName){
		$scope.name=newName;
	}
});

//example directive
app.directive('hellodirective',function(){
	return {
		template:"<p>River flow slowly</p>"
	};
});

//example partial page
app.directive('loadExternal',function(){
	return {
		templateUrl:"detail-user.html"
	};
});