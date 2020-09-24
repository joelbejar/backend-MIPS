const express = require('express');
const morgan = require('morgan')
const path = require('path');

//initializations
const app = express();

//setting
require('dotenv').config();

console.log("process.env : ",process.env.PORT)
app.set('port', process.env.PORT ? process.env.PORT : 4000 );
require('./config/database.js')
let routes = require('./routes/index')
//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json());


// Global variables
app.use((req,res,next)=>{
    next()
})


// Routes
routes.getRoutes(app);
//app.use(routes)


// Public

// Starting the server

app.listen(app.get('port'), () => {
   
    console.log(`Serve on Port ${app.get('port')}`)
})


