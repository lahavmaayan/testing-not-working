var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

console.log('hello!');
var db;

function initConnection(){
	mongoose.connect('mongodb://Maayan:Shahar@ds045704.mlab.com:45704/todo', function(err, res) {
		if (err){
			console.log('error connecting to the DB');
		} else{
			console.log('connected to the DB');
		}

		db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log('Connected to DB! :)');
        });

    });
}

initConnection();