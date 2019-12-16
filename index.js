'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3966;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/guarne_fm', (err, res) => {
    if(err){
        throw err;
    }else{
        console.log("Connection to bd is success...");
        app.listen(port, function(){
            console.log("Server is up http://localhost:"+port);
        });
    }
})

