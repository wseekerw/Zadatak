angular.module('navigation').
    directive('mainNav', function($location, $cookies, $http){
        return {
        restrict: "E",
        templateUrl: static('angular_templates/nav.html'),
        link: function(scope) {

            scope.userLoggedIn = false
            scope.kategorija = false

            scope.$watch(function(){

                var token = $cookies.get("token")

                if (token) {
                    scope.userLoggedIn = true
                } else {
                    scope.userLoggedIn = false
                }
            })

        }
    }

});