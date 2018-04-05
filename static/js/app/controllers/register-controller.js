var app = angular.module('notes');

app.controller('RegisterController', function($timeout, $http, $scope, $window){

    //$window.scrollTo(0, 110);


    var self = this;
    var registerUrl = 'api/users/create/'
    self.user = {};

    self.doRegister = function(){

        var registerRequest = {
            url: registerUrl,
            method:'POST',
            data: {
                username: self.user.username,
                email: self.user.email,
                email2: self.user.email2,
                password: self.user.password,
                password2: self.user.password2
            },
            headers: {'Content-Type': 'application/json'}

        }

        $scope.userRegistered = false;

        var registerPromise = $http(registerRequest)

        registerPromise.then(function(response){
            self.statusText = response.statusText
            //console.log(self.statusText)
            //console.log(response)

            self.regUsername = response.data.username
            self.regEmail = response.data.email

            if (self.statusText == "Created") {
                self.registerMessage = "* Регистрација успешна."

                self.usernameError1 = "";
                self.emailErrorValid = "";
                self.emailError2Valid = "";
                self.emailError2Match = "";
                self.emailError2Reg = "";
                self.passwordErrorMatch = "";

            }


            $scope.$watch(function(){
                if (self.regUsername && self.regEmail) {
                    $scope.userRegistered = true
                } else {
                    $scope.userRegistered = false
                }
            })

            $window.scrollTo(0, 0);

        });



        registerPromise.catch(function(errResponse){
            console.log(errResponse)

            self.usernameError = errResponse.data.username
            self.emailError = errResponse.data.email
            self.email2Error = errResponse.data.email2
            self.passwordError = errResponse.data.password2


            // Username field
            if (self.usernameError == "A user with that username already exists.") {
                self.usernameError1 = "* A user with that username already exists."
            } else {
                self.usernameError1 = '';
            }

            // First email field
            if (self.emailError == "Enter a valid email address.") {
                self.emailErrorValid = "* Enter a valid email address."
            } else {
                self.emailErrorValid = '';
            }

            // Second Email field
            if (self.email2Error == "Enter a valid email address.") {
                self.emailError2Valid = "* Enter a valid email address.";
                self.emailError2Match = "";
                self.emailError2Reg = "";
            }

            else if (self.email2Error == "Emails must match!") {
                self.emailError2Match = "* Emails must match!"
                self.emailError2Valid = "";
                self.emailError2Reg = "";
            }
             else if (self.email2Error == "This email is allready registered.") {
                self.emailError2Reg = "* This email is allready registered."
                self.emailError2Valid = "";
                self.emailError2Match = "";

            } else {
                self.emailErrorValid = "";
                self.emailError2Valid = "";
                self.emailError2Match = "";
                self.emailError2Reg = "";
            }

            // Password field
            if (self.passwordError == "Passwords must match!") {
                self.passwordErrorMatch = "* Passwords must match!"
            } else {
                self.passwordErrorMatch = '';
            }




        });


    };




});