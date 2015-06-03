tourApp.controller('gbTourCtrl', function($scope, getShows){
	getShows()
		.success(function(tourDates){
			$scope.shows = tourDates;
			console.log($scope.shows);
		});
});