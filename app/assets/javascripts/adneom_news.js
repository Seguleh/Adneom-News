angular.module('AdneomNews', ['ui.router', 'templates'])

.config([
  
'$stateProvider',
'$urlRouterProvider',

function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html.haml',
      controller: 'AppContrl',
      resolve: {
        postPromise: ['posts', function(posts){
          return posts.getAll();
        }]
      }
    });

    .state('posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html.haml',
      controller: 'PostsContrl',
      resolve: {
        post: ['$stateParams', 'posts', function($stateParams, posts) {
          return posts.get($stateParams.id);
        }]
      }
    });

  $urlRouterProvider.otherwise('home');

}])