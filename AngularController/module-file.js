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
app.directive("loadexternal",function(){
	return {
		templateUrl:"detail-user.html"
	};
});

//example consume scope
app.controller('ctrldirective',function($scope){
	$scope.player = {
		displayName: 'Robin',
		level: 'Expert',
	};
});

app.directive('getplayer',function(){
	return {
		template: 'Nama Player: <span ng-bind="player.displayName"></span><br />Level: <span ng-bind="player.level"></span>'
	};
});

//example bind element
app.controller('ctrldirective2',function($scope){
	$scope.playerOne = {
		displayName: 'Butterfly',
		level: '27'
	}
	$scope.playerTwo = {
		displayName: 'Genos',
		level: 'S'
	}
});

app.directive('getplayer2',function(){
	return {
		restriction: 'E',
		scope: {
			selectscope: '='
		},
		template: 'Nama Player: <span ng-bind="selectscope.displayName"></span><br />Level: <span ng-bind="selectscope.level"></span>'
	};
});