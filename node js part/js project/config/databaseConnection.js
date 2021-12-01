const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/employees');

module.exports= mongoose.connection.once('open',function(){
    console.log ('connection is made ');
}).on('error' , function(error){
    console.log('error is : ');
});