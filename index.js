var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var db;

function initConnection(dbpath){
	mongoose.connect('mongodb://Maayan:Shahar@ds045704.mlab.com:45704/todo', function(err, res) {
		if (err){
			console.log('error connecting to the DB');
		} else{
			console.log('connected to the DB');
		}

		db = mongoose

}