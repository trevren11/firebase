# firebase tutorial
For this tutorial we will build a simple angular chat application

1. Set up your firebase account at https://www.firebase.com/.  You should be able to login using your google account.  You should see a base URL that you will use to view the databases associated with your application.
2. Create an express application to host your files (express firebase)
2. Create an angular front end with a form and a place to list existing chats (public/index.html).
  ```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Chat</title>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"></script>
  <script src="javascripts/script.js"></script>
  
</head>
<body ng-app="chatApp">
  <div ng-controller="chatController">
  <form novalidate class="simple-form">
    Name: <input type="text" ng-model="user.name" /><br />
    Chat: <input type="text" ng-model="user.chat" /><br />
    <input type="submit" ng-click="update(user)" value="Save" />
  </form>
  <ul>
  <li ng-repeat='line in chats'>
  {{line.name}} - {{line.chat}}
  </li>
  </ul>
</div>

</body>
</html>
  ```
2. Now create a controller for this front end (public/javascripts/script.js)

  ```js
angular.module('chatApp', [])
.controller('chatController', ['$scope', function($scope) {
  $scope.chats = []; 

  $scope.update = function(user) {
    var tmp = {name:user.name, chat:user.chat};
    $scope.chats.push(tmp);
    user.chat = ""; 
  };  

}]);
  ```
3. Test the application to make sure it works.
