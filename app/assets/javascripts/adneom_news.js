angular.module('AdneomNews', ['ui.router', 'templates'])

.config([
  
  '$stateProvider',
  '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'templates/_home.html',
        controller: 'AppContrl',
        resolve: {
          postPromise: ['posts', function(posts){
              return posts.getAll();
          }]
        }
      })

      .state('posts', {
        url: '/posts/{id}',
        templateUrl: 'templates/_posts.html',
        controller: 'PostsContrl',
        resolve: {
          post: ['$stateParams', 'posts', function($stateParams, posts) {
            return posts.get($stateParams.id);
          }]
        }
      });

    $urlRouterProvider.otherwise('home')
}]);