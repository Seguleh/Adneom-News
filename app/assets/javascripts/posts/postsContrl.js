angular.module('AdneomNews')

.controller('PostsContrl', [

	'$scope','posts','post',

	function($scope, posts, post){

		$scope.post = post;

		$scope.addComment = function() {

		  if($scope.body === '') { $("#notice").append("<div id='alert-notice' class='alert alert-danger'>The Body field can't be empty<div>").fadeOut(3000, function() { $("#alert-notice").remove(); }); return; }
		  if($scope.author === '') { $("#notice").append("<div id='alert-notice' class='alert alert-danger'>The Author field can't be empty<div>").fadeOut(3000, function() { $("#alert-notice").remove(); }); return; }

		  posts.createComment(post.id, {

		    body: $scope.body,
		    author: $scope.author

		  }).success(function(comment) {

		  	$scope.post.comments.push(comment);
		  	$("#notice").append("<div id='alert-notice' class='alert alert-success'>Comment created successfully!<div>").fadeOut(3000, function() { $("#alert-notice").remove(); });

		  });

		  $scope.body = '';
		  $scope.author = '';

		};

		$scope.incrementUpvotes = function(comment){

		  posts.upvoteComment(post, comment);

		};
}]);