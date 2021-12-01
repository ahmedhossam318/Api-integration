const express = require('express');
require('express-async-errors')
const databaseConnection = require('./config/databaseConnection')
const helmet = require('helmet')
const compression = require('compression')
var logger = require('./config/logger')
const db = require('./config/databaseConnectionSql')
const app = express()
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug')
app.use(express.json())
app.use(helmet())

// cross origin policy
const cors = require('cors');
;app.use(cors());
// employee routing 

// user routing

const userRoute =require('./routes/user')
app.use('/user',userRoute)


// route auth
const authRoute=require('./routes/auth')
app.use('/auth',authRoute)

// for error pages
app.all('*',(req, res ,next)=>{
    res.status(404).json({
        status:'false',
        message:'Page Npt Found ! '
    })
})


 app.get('/', function(req , res){
          res.send("Hi , Ahmed")

 });

//-------------------------------------------



//------------------------------------------


const port = process.env.port || 3000;
app.listen(port , ()=>console.log('app is Runing on port '+ port ));