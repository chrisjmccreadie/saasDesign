var demoApp = angular.module('demoApp', []);

demoApp.controller('demoCtrl', function($scope, $http){
	$http.get("js/menu.json").success(function(response){
		$scope.menus = response;
	});
});