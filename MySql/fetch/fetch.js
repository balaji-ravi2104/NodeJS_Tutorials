// Import express modules
const express = require("express");

// create router instance
const router = express.Router();

// import database connections
const con = require("../config/db_connection");

// get connection object
let connection = con.getConnection();

// connect to database
connection.connect();

router.get("/", (req, res) => {
  connection.query(`select * from products`, (err, result) => {
    if (err) {
      res.json({ message: "error" + err });
    }
    console.log(result);
    res.send(result)
  });
});

// export router

module.exports = router;
