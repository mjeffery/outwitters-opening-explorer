var express = require('express');
var router = express.Router();

var get_replays = 
	'select end_frame, replay_id, p1_win, p1_name, p2_win, p2_name from turns ' +
	'join games using (game_id) ' +
	'where end_raw_code_id=?';

router.param('end_code_id', function(req, res, next, code_id) {
	req.getConnection(function(err, conn) {
		if(err) return next(err);
		conn.queryAsync(get_replays, [code_id])
			.then(function(results) {
				req.replays = results;
				next();
			})
			.catch(next);
	});
});

router.get('/:end_code_id', function(req, res) {
	res.render('replays', {
		replays: req.replays,
		start_code_id: req.param('from')
	});
});

module.exports = router;
