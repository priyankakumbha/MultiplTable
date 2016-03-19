angular.module('myApp', [])
		
		.controller('MyCtrl', function( $scope) {
		  $scope.gender = new Gender(true);
	  });