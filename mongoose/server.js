//import modules
const express = require('express')
let bodyparser = require('body-parser')
let cors = require('cors')
const mongoose = require('mongoose')

// import url
let url = require('./url')

//create router instance
const app = express()
//Set JSON as MIME type
app.use(bodyparser.json())
//client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({extended:false}))
//enable CORS -> Cross Origine Resource Sharing -> communication among various ports
app.use(cors())
//create port
let port = 8080


// connect to mongoDB
const connect = async () =>{
    try{
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    }catch(error){
        throw error;
    }
} 

const productRoute = require('./routes/productRoutes');
app.use("/",productRoute);


//assign port no
app.listen(port,()=>{
    connect();
    console.log('Server listening port no:- ', port)
})

