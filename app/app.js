const mongoose = require("mongoose");
const express = require('express');
const app = express();
require('dotenv').config();
const routes = require("../api/routes/routes");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//handle CORS
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','POST, PUT, PATCH, GET, DELETE');
    }
    next();
});

//EJS Middleware
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

//Static site middleware
app.use(express.static('public'));
app.use(express.static('views'));


app.use("/", routes);

//Error Handling Middleware
app.use((req,res,next) => {
    const error = new Error('Not found!');
    error.status(404);
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        }
    });
});

mongoose.connect(process.env.db_url, (err) => {
    if(err){
        console.error("Error!", err.message);
    }else{
        console.log("MongoDB Connected Successfully!");
    }
});

module.exports = app;
