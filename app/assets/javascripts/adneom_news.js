angular.module('AdneomNews', ['ui.router', 'templates'])

.config([
  
  '$stateProvider',
  '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/_home.html',
        controller: 'AppContrl',
        resolve: {
          postPromise: ['posts', function(posts){
              return posts.getAll();
          }]
        }
      })

      .state('posts', {
        url: '/{id}',
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