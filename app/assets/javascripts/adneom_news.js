angular.module('AdneomNews', ['ui.router', 'templates'])

.controller('AppContrl', [

  '$scope','posts',

  function($scope){

    $scope.posts = posts.posts;
  

    $scope.addPost = function(){

      if(!$scope.title || $scope.title === '') { return; }
      if(!$scope.link || $scope.link === '') { return; }

        $posts.create({

          title: $scope.title, 
          link: $scope.link,
          upvotes: 0,

        });

        $scope.title = '';
        $scope.link = '';

    };

    $scope.incrementUpvotes = function(post){

        posts.upvote(post);

    };
}])

.controller('PostsContrl', [

  '$scope','posts','post',

  function($scope, post, posts){

    $scope.post = post;

    $scope.addComment = function(){

      if($scope.body === '') { return; }
      if($scope.author === '') { return; }

      posts.addComment(post.id, {

        body: $scope.body,
        author: $scope.author,
        upvotes: 0

      }).success(function(comment) {

        $scope.post.comments.push(comment);

      });

      $scope.body = '';
      $scope.author = '';

    };

    $scope.incrementUpvotes = function(comment){
      posts.upvoteComment(post, comment);
    };
  
}])

.factory('posts', ['$http', function($http){

  var o = {
      posts: []
    };

    o.getAll = function() {
      return $http.get('/posts.json').success(function(data){
        angular.copy(data, o.posts);
      });
    };

    o.create = function(post) {
    return $http.post('/posts.json', post).success(function(data){
      o.posts.push(data);
    });
  };

  o.upvote = function(post) {
    return $http.put('/posts/' + post.id + '/upvote.json')
      .success(function(data){
        post.upvotes += 1;
      });
  };

  o.get = function(id) {
    return $http.get('/posts/' + id + '.json').then(function(res){
      return res.data;
    });
  };

  o.addComment = function(id, comment) {
    return $http.post('/posts/' + id + '/comments.json', comment);
  };

  o.upvoteComment = function(post, comment) {
    return $http.put('/posts/' + post.id + '/comments/'+ comment.id + '/upvote.json')
      .success(function(data){
        comment.upvotes += 1;
      });
  };

    return o;

}])

.config([
  
  '$stateProvider',
  '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '_home.html.haml',
        controller: 'AppContrl',
        resolve: {
          postPromise: ['posts', function(posts){
            return posts.getAll();
          }]
        }
      })

      .state('posts', {
        url: '/posts/{id}',
        templateUrl: '_posts.html.haml',
        controller: 'PostsContrl',
        resolve: {
          post: ['$stateParams', 'posts', function($stateParams, posts) {
            return posts.get($stateParams.id);
          }]
        }
      });

    $urlRouterProvider.otherwise('home');
}]);