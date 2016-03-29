# firebase tutorial
For this tutorial we will build a simple angular chat application

1. Set up your firebase account at https://www.firebase.com/.  You should be able to login using your google account.  You should see a base URL that you will use to view the databases associated with your application.
2. Create an express application to host your files (express firebase)
2. Create an angular front end with a form and a place to list existing chats (public/index.html).
  ```html
<!doctype html>
<html ng-app="myApp">
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <script src="javascripts/script.js"></script>
  </head>
  
  <body>

  <div ng-controller="chatController">
  <form novalidate class="simple-form">
    Name: <input type="text" ng-model="user.name" /><br />
    Chat: <input type="text" ng-model="user.chat" /><br />
    <input type="submit" ng-click="update(user)" value="Save" />
  </form>
  <ul>
  <li ng-repeat='line in chats'>
  {{line.from}} - {{line.body}}
  </li>
  </ul>
</div>

  </body>
</html>
  ```
2. Now create a controller for this front end (public/javascripts/script.js)

  ```js
var myApp = angular.module("myApp",[]);
myApp.controller("chatController", ["$scope",
function($scope) {
  $scope.chats = [];
  $scope.update = function(user) {
      var newmessage = {from:user.name || "anonymous",body:user.chat};
      console.log(newmessage);
      $scope.chats.push(newmessage);
      user.chat = "";
  }
} 
]);
  ```
3. Test the application to make sure it works.
4. Now save the posts into firebase and make sure they end up there by looking at the database page.  First add the js links to public/index.html

 ```
<script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js"></script>
<script src="https://cdn.firebase.com/libs/angularfire/1.0.0/angularfire.min.js"></script>
 ```
5. Then inject the firebase service into the controller

 ```js
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
} 
]);
 ```
5. Look to see the resulting entries in the firebase interface
