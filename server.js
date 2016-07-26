// the server side of our app

// will hold the connection to the mogoDB.
var mongo_driver = require('./mongos_driver.js');
mongo_driver.initConnection();