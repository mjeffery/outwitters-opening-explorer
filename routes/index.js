var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { 
	  title: 'Express',
	  maps: [
		{ name: "Long Nine", code: 45 },
		{ name: "Foundry", code: 549 },
		{ name: "Reaper", code: 425 },
		{ name: "Glitch", code: 177 },
		{ name: "Thorn Gulley", code: 929 },
		{ name: "Sharkfood Island", code: 1 },
		{ name: "Sweetie Plains", code: 34 },   //6, 
		{ name: "Peekaboo", code: 56 }, //7
		{ name: "Skull Duggery", code: 621 }, //14
		{ name: "War Garden", code: 488 }, //15
		{ name: "Sweet Tooth", code: 959 } //16
      ]
  });
});

module.exports = router;
