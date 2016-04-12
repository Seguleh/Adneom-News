angular.module('AdneomNews')

.controller('PostsContrl', [

	'$scope','posts','post',

	function($scope, posts, post){

		$scope.post = post;

		$scope.addComment = function() {

		  if($scope.body === '') { $("#notice").html("<%= flash[:notice] = Body field can't be empty %>"); return; }
		  if($scope.author === '') { $("#notice").html("<%= flash[:notice] = Author field can't be empty %>"); return; }

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