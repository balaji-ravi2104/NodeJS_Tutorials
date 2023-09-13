//import modules express body-parser cors
let express = require('express')
let bodyparser = require('body-parser')
let cors = require('cors')
//create rest object
let app = express()
//set JSON as MIME type
app.use(bodyparser.json())
//client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({ extended: false }))
//enable CORS -> Cross Origine Resource Sharing -> communication among various ports
app.use(cors())
//create port
let port = 8080
//import fetch insert update delete modules
let login = require('../login/login')
//use above modules
app.use("/login", login)

app.listen(port, () => {
    console.log('Server listening port no :- ', port)
})

