// will handel all the calls to the DB.
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var db;

exports.initConnection = function (){
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



exports.initSchema = function(schema) {
    Schema = mongoose.Schema;
    return new Schema(schema);
}

exports.getModel = function (modelname, modelschema) {
    return mongoose.model(modelname, modelschema);
}

// abstract functions
exports.find = function(modelname, data, callback) {
    return modelname.find(data, callback);
}

exports.findOne = function(modelname, data, callback) {
    return modelname.findOne(data, callback);
}

