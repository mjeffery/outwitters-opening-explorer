var _ = require('lodash');
var express = require('express');
var router = express.Router();

var find_replay = 'select start_frame, replay_id from turns join games using (game_id) where start_raw_code_id=? limit 1';

router.param('end_code_id', function(req, res, next, code_id) {
	req.getConnection(function(err, conn) {
		if(err) return next(err);
		conn.queryAsync(find_replay, [code_id])
			.then(function(results) {
				_.extend(req, results[0]);
				next();
			});
	});
});


module.exports = router.get('/:end_code_id', function(req, res) {
	res.json({
		replay_id: req.replay_id,
		end_frame: req.start_frame - 1
	})
});
