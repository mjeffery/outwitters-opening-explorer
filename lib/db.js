var mysql = require('mysql');
var connection = require('express-myconnection');
var dbconf = require('rc')('db');

module.exports = connection(mysql, dbconf, 'pool'); 
