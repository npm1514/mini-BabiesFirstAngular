var app = angular.module("friendsList");
app.controller("mainCtrl", function($scope){
	$scope.friends = {name: "Nick"};
	$scope.addFriend = function() {
		$scope.friends.push(user);
	};

});
