(function() {
	$(document).ready(function() {
		$('.replay-link').click(function(e) {
			e.preventDefault();
			var $elem = $(this);
			var replay_id = $elem.attr('data-replay-id');
			var frame = $elem.attr('data-frame');
			
			changeReplay(replay_id, frame);
		});
	});
})();
