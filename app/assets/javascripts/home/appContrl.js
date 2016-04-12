angular.module('AdneomNews')

.controller('AppContrl', [

	'$scope','posts',

	function($scope, posts){

		$scope.posts = posts.posts;
	
		$scope.addPost = function(){

			if(!$scope.title || $scope.title === '') {alert("Title can't be blank");  return; }
			if(!$scope.link || $scope.link === '') {alert("Link can't be blank");  return; }

		  	posts.create({

		  		title: $scope.title, 
		  		link: $scope.link

		  	});

		  	$scope.title = '';
		  	$scope.link = '';

		};

		$scope.incrementUpvotes = function(post){

	  		posts.upvote(post);

		};

}]);