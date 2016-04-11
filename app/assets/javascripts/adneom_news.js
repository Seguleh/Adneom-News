angular.module('AdneomNews', ['ui.router'])

.config([
  
'$stateProvider',
'$urlRouterProvider',

function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html.haml',
      controller: 'AppContrl'
    });

    .state('posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html.haml',
      controller: 'PostsContrl'
    });

  $urlRouterProvider.otherwise('home');

}])