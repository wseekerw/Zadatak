var app = angular.module('notes');

app.controller("notesUserController", function($http, $scope, $cookies){

    var token = $cookies.get('token')
    var username = $cookies.get('username')

    if (token) {

    var getRequest = $http({
        url: 'api/notes/notes_by_user/?format=json',
            method: "get",
            headers: {
                authorization: "JWT " + token
            }
        })

    getRequest.then(function(response){
       $scope.user_notes = response.data;
       console.log($scope.user_notes);

       if ($scope.user_notes.length === 0) {
           $scope.wrongUser = true
           //console.log('Prazna lista')
       } else if ($scope.user_notes.length > 0) {
           $scope.wrongUser = false
           //console.log('Puna lista')
       }
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