angular.module('AdneomNews')

.controller('AppContrl', [

	'$scope','posts',

	function($scope, posts){

		$scope.posts = posts.posts;
	
		$scope.addPost = function(){

			if(!$scope.title || $scope.title === '') {$("#notice").append("<div id='alert' class='alert alert-danger'>The Title field can't be empty<div>").fadeOut(3000, function() { $(this).remove(); });  return; }
			if(!$scope.link || $scope.link === '') {$("#notice").append("<div id='alert' class='alert alert-danger'>The Link field can't be empty<div>").fadeOut(3000, function() { $(this).remove(); });  return; }

		  	posts.create({

		  		title: $scope.title, 
		  		link: $scope.link

		  	}).success(function (){

		  		$("#notice").append("<div id='alert' class='alert alert-success'>Post created successfully!<div>").fadeOut(3000, function() { $(this).remove(); });

		  	});

		  	$scope.title = '';
		  	$scope.link = '';

		};

		$scope.incrementUpvotes = function(post){

	  		posts.upvote(post);

		};

}]);