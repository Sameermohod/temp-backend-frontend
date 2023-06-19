const express = require ('express');
const bodyParser= require('body-parser');
const cores = require("cors")
const mongoose=require("mongoose")


// set up express app
const app = express();

app.use(cores())

// connect to server 
mongoose.connect('mongodb://127.0.0.1:27017/test')

app.use(bodyParser.json());

//initialize routes
app.use("/api",require('./routes/api'));


app.use(function(err,req,res,next){
    res.send({error:err.message})
})


// listen for req
app.listen(process.env.port||4000,function(){
 console.log("now listening port 4000");
});