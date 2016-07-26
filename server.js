// the server side of our app

// will hold the connection to the mogoDB.
var mongo_driver = require('./mongos_driver.js');
mongo_driver.initConnection();
var simpleToDo = mongo_driver.initSchema({
  TodoName: String,
  assignTo: String,
  Date: String,
  whoAdded: String
});

var simpleTodoModel = mongo_driver.getModel('ToDos', simpleToDo);
console.log(simpleTodoModel);

var express = require('express');
var app = express();

app.get('*', function(){
    console.log('got request GET');
});

app.post('*', function(){
    console.log('got request POST');
})


app.listen(3000, function(){
    console.log('app is listening on port 3000');
});
