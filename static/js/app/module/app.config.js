angular.module('notes').
    config(function($interpolateProvider){
        $interpolateProvider.startSymbol('[[').endSymbol(']]');


    })

.config(['$urlRouterProvider','$locationProvider', '$stateProvider', function($urlRouterProvider,$locationProvider, $stateProvider){
  $urlRouterProvider.otherwise("/");

  $stateProvider

    .state('main_page',{
      url:'/',
      templateUrl: static('angular_templates/main_page.html'),
      controller: 'mainPageController',
      controllerAs: 'MCtrl'

    })

    .state('notes',{
      url:'/notes',
      templateUrl: static('angular_templates/notes.html'),
      controller: 'notesController',
      controllerAs: 'NCtrl'

    })

    .state('notes_user',{
      url:'/notes_user',
      templateUrl: static('angular_templates/notes_user.html'),
      controller: 'notesUserController',
      controllerAs: 'NUserCtrl'

    })

    .state('add_note',{
      url:'/add_note',
      templateUrl: static('angular_templates/add_note.html'),
      controller: 'addNoteController',
      controllerAs: 'addNCtrl'

    })

    .state('login', {
      url: '/login',
      templateUrl: static('angular_templates/login.html'),
      controller: "LoginController",
      controllerAs: 'LgCtrl'
    })

    .state('logout', {
      url: '/logout',
      controller: "LogoutController"
    })

    .state('register', {
      url: '/register',
      templateUrl: static('angular_templates/register.html'),
      controller: "RegisterController",
      controllerAs: 'RgCtrl'
    })


}])

