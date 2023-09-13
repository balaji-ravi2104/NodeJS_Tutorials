//import express module
const express = require('express')
//create rest object
const app = express()
//import db
const db = require("./models")
//set JSON as MIME type
app.use(express.json())
//client parameters are encoded as JSON
app.use(express.urlencoded({ extended: false }))
//create port
const port = process.env.PORT || 8080

//import apiroutes
const apiRoutes = require("./routes/apiRoutes")
//use apiRoutes
app.use("/",apiRoutes);


//syncronize with sequelize and assign port no
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("Server Listening port no:- ", port)
    })
}, (errMsg) => {
    console.log("Error occured:- ", errMsg)
})
/*
Test URLs with postman
GET
    http://localhost:8080/fetch/all
    http://localhost:8080/fetch/find/2
POST
    http://localhost:8080/insert
PUT
    http://localhost:8080/update
DELETE
    http://localhost:8080/delete/2
*/
