angular.module('BandsintownApi', [])

	.constant('SHOWS_URL','//api.bandsintown.com/artists/Goldboot/events?format=json&api_version=1.0&app_id=goldbootWebsite')

	.factory('getShows', function($http, SHOWS_URL){
		return function(){
			return $http({
				method: 'GET',
				url: SHOWS_URL
			});
		}
	});