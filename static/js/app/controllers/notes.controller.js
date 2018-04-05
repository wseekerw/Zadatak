var app = angular.module('notes');

app.controller("notesController", function($http, $scope, $cookies){

    var token = $cookies.get('token')
    var username = $cookies.get('username')

    if (token) {

        var getRequest = $http({
            url: 'api/notes/?format=json',
            method: "get"
        })

        getRequest.then(function(response){
            $scope.user_notes = response.data;
            console.log(response);

        })

        getRequest.catch(function(ErrResponse){

           console.log(ErrResponse);

        })

    } else {
        console.log('No request takes place because there is no user')
    }





    $scope.userLoggedIn = false

    $scope.$watch(function(){
        if (token) {
            $scope.userLoggedIn = true
        } else {
            $scope.userLoggedIn = false
        }

    })


});