(function(exports) {

	var url_base = 'http://osn.codepenguin.com/replays/view/';

	function changeReplay(replay_id, frame) {
		var timestamp = (new Date()).getTime();
		var	url = url_base + replay_id + '?' + timestamp + '#' + frame;
		$('.replay-viewer iframe').attr('src', url); 
	}

	exports.changeReplay = changeReplay;
})(this);
