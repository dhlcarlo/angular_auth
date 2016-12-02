  angular.module('zem', ['ui.router', 'satellizer'])
.config(function($stateProvider, $authProvider, $urlRouterProvider, $httpProvider){


   
   $authProvider.loginUrl = 'http://localhost:8080/api/auth';
 

   $stateProvider
      .state('login', {
       url: '/',
       templateUrl: 'templates/login.html',
       controller: 'loginController',
       controllerAs: 'loginCtrl'
    })
     .state('main', {
       url: '/home',
       templateUrl: 'templates/main.html',
       controller: 'mainController',
       controllerAs: 'mainCtrl'
    })
     .state('ruta', {
       url: '/ruta',
       templateUrl: 'templates/ruta.html',
       controller: 'mainController',
       controllerAs: 'mainCtrl'
    });

      $urlRouterProvider.otherwise('/');




});

