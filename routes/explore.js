var express = require('express')
var router = express.Router();

var find_replay = 'select replay_id from turns join games using (game_id) where start_raw_code_id=? limit 1';

var get_end_states =
	'select end_raw_code_id as next_code_id, ' +
		   'count(*) as total_games, ' +
	       'sum(case when active_player=1 then p1_win else p2_win end) / count(*) * 100 as win_percent ' +
	'from turns ' +
	'join games using (game_id) ' +
	'where start_raw_code_id = ? ' +
	'group by next_code_id ' +
	'order by total_games desc';

router.param('start_code_id', function(req, res, next, code_id) {
	req.getConnection(function(err, conn) {
		if(err) return next(err);
		conn.queryAsync(find_replay, [code_id])
			.then(function(results) {
				req.replay_id = results[0].replay_id;
				return conn.queryAsync(get_end_states, [code_id]); 
			})
			.then(function(results) {
				req.end_states = results;
				next();
			})
			.catch(next);
	});
});

router.get('/:start_code_id', function(req, res) {
	res.render('explore', { 
		code_id: req.params.start_code_id,
		timestamp: (new Date()).getTime(),
		replay_id: req.replay_id,
		end_states: req.end_states
	});
});

module.exports = router;
