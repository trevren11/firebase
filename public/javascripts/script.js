var myApp = angular.module("myApp", ["firebase"]);
myApp.controller("chatController", ["$scope", "$firebaseArray",
function($scope, $firebaseArray) {
  var ref = new Firebase("https://incandescent-torch-9913.firebaseio.com/");
  $scope.chats = $firebaseArray(ref);
  $scope.update = function(user) {
	  var newmessage = {from:user.name || "anonymous",body:user.chat};
      console.log(newmessage);
	  $scope.chats.$add(newmessage);
	  user.chat = "";
  }

  $scope.delete = function(user) {
	  var newmessage = {from:user.name || "anonymous",body:user.chat};
      console.log(newmessage);
	  $scope.chats.$delete(newmessage);
	  user.chat = "";
  }
}
]);
