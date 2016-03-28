angular.module('chatApp', [])
.controller('chatController', ["$scope","$firebaseArray", 
  function($scope,$firebaseArray) {
      var ref = new Firebase("https://incandescent-torch-9913.firebaseio.com/");
	  $scope.chats = $firebaseArray(ref);

	  $scope.update = function(user) {
		var tmp = {name:user.name, chat:user.chat};
		$scope.chats.$add(tmp);
		user.chat = "";
	  };

}]);
