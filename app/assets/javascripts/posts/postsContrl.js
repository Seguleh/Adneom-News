angular.module('AdneomNews')

.controller('PostsContrl', [

	'$scope','posts','post',

	function($scope, posts, post){

		$scope.post = post;

		$scope.addComment = function() {

		  if($scope.body === '') { alert("Body can't be blank"); return; }
		  if($scope.author === '') { alert("Author can't be blank"); return; }

		  posts.createComment(post.id, {

		    body: $scope.body,
		    author: $scope.author

		  }).success(function(comment) {

		  	$scope.post.comments.push(comment);

		  });

		  $scope.body = '';
		  $scope.author = '';

		};

		$scope.incrementUpvotes = function(comment){

		  posts.upvoteComment(post, comment);

		};
}]);