var app = angular.module('notes');

app.controller("mainPageController", function($http, $scope, $cookies){

    if ($cookies.get("token")) {
        $scope.user = {
            username: $cookies.get("username")
        }
        $scope.welcomeMessage = 'You have successfully logged in'

    } else {
        $scope.user = {
            username: "Guest"
        }

    }




});