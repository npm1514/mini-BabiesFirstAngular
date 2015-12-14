var app = angular.module("friendsList");
app.controller("mainCtrl", function($scope){
	$scope.friends = ["Nick"];

	$scope.addFriend = function() {
		$scope.friends.push($scope.newFriend);
	};

});
