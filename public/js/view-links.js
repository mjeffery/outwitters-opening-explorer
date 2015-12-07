(function() {
	$(document).ready(function() {
		$('.view-link').click(function(e) {
			e.preventDefault();
			var $elem = $(this);
			var state_id = $elem.attr('data-state-id');

			$.ajax({
				method: 'GET',
				url: '/api/view/' + state_id,
				accepts: 'application/json',
				success: function(data) {
					changeReplay(data.replay_id, data.end_frame);
					$('.end-state').removeClass('viewing');
					$elem.parents('.end-state').addClass('viewing');
				}
			});
		});
	});
})();
