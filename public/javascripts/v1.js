  angular.module('chatApp', [])
    .controller('chatController', ['$scope', function($scope) {
      $scope.chats = [];

      $scope.update = function(user) {
        var tmp = {name:user.name, chat:user.chat};
        $scope.chats.push(tmp);
        user.chat = "";
      };

       $scope.delete = function(user) {
        var tmp = {name:user.name, chat:user.chat};
        $scope.chats.delete(tmp);
        user.chat = "";
      };

    }]);
