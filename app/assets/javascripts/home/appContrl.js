angular.module('AdneomNews')

.controller('AppContrl', [

	'$scope','posts',

	function($scope, posts){

		$scope.posts = posts.posts;
	
		$scope.addPost = function(){

			if(!$scope.title || $scope.title === '') {$("#notice").append("<div class='alert alert-danger'>The Title field can't be empty<div>").fadeIn().fadeOut(3000, function() { $(this).removeChild(); });  return; }
			if(!$scope.link || $scope.link === '') {$("#notice").append("<div class='alert alert-danger'>The Link field can't be empty<div>").fadeIn().fadeOut(3000, function() { $(this).removeChild(); });  return; }

		  	posts.create({

		  		title: $scope.title, 
		  		link: $scope.link

		  	}).success(function (){

		  		$("#notice").append("<div class='alert alert-success'>Post created successfully!<div>").fadeOut(3000, function() { $(this).removeChild(); });

		  	});

		  	$scope.title = '';
		  	$scope.link = '';

		};

		$scope.incrementUpvotes = function(post){

	  		posts.upvote(post);

		};

}]);