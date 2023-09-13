const express = require("express");

// create router instance
const router = express.Router();

// import database connections
const con = require("../config/db_connection");

// get connection object
let connection = con.getConnection();

// connect to database
connection.connect();

let token = require("../token/token");


router.post("/", (req, res) => {
    // console.log(req.body);
    let u_name = req.body.u_name
    let u_pass = req.body.u_pass
    //compare with database
    connection.query(`select * from login_details where u_name = '${u_name}' and u_pass = '${u_pass}'`,
        (err, recordsArray) => {
            if(err){
                res.json({ 'auth': 'failed' })
            }
            else if (recordsArray != 0) {
                let obj = { u_name, u_pass }
                let my_token = token(obj, JSON.stringify(new Date()))
                res.json({ 'auth': 'success', token: my_token })
            }
            else
                res.json({ 'auth': 'failed' })
        })
})
//export router
module.exports = router
