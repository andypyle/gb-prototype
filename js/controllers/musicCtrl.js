musicApp.controller('gbMusicCtrl', function($scope){
	$scope.currentSet = 'https://soundcloud.com/goldboot/sets/the-electric-eccentric-private';
});

/*

<div plangular="{{ currentSet }}">
 <ul>
  <li ng-repeat="track in tracks">
    <button ng-click="playPause($index)" ng-class="{'active': player.playing === track.src}">
      play
     </button>
      {{$index + 1}} - {{track.title}}
    
  </li>
</ul>
</div>

*/