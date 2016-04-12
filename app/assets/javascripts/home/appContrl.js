angular.module('AdneomNews')

.controller('AppContrl', [

	'$scope','posts',

	function($scope, posts){

		$scope.posts = posts.posts;
	
		$scope.addPost = function(){

			if(!$scope.title || $scope.title === '') {$("#notice").html("<%= flash[:notice] = Title field can't be empty %>");  return; }
			if(!$scope.link || $scope.link === '') {$("#notice").html("<%= flash[:notice] = Link field can't be empty %>");  return; }

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