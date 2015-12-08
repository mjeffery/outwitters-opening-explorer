var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { 
	  title: 'Outwitters Opening Explorer',
	  maps: [
		{ name: "Long Nine", code: 45 }, //9
		{ name: "Foundry", code: 546 }, //3
		{ name: "Reaper", code: 423 }, //13
		{ name: "Glitch", code: 176 }, //4
		{ name: "Thorn Gulley", code: 924 }, //12
		{ name: "Sharkfood Island", code: 1 }, //10
		{ name: "Sweetie Plains", code: 34 },   //6, 
		{ name: "Peekaboo", code: 56 }, //7
		{ name: "War Garden", code: 485 }, //15
		{ name: "Skull Duggery", code: 617 }, //14
		{ name: "Sweet Tooth", code: 954 } //16
      ]
  });
});

module.exports = router;
