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

router.post("/", (req, res) => {
  let p_id = req.body.p_id;
  let p_name = req.body.p_name;
  let p_cost = req.body.p_cost;
  connection.query(
    `insert into products values(${p_id},'${p_name}',${p_cost})`,
    (err, result) => {
      if (err) {
        res.json({ "insert ": "Error " + err });
      } else {
        if (result.affectedRows != 0) {
          console.log("Data inserted");
          res.json({ "insert ": "success" });
        } else {
          console.log("Not inserted");
          res.json({ "insert" : "error" });
        }
      }
    }
  );
});

module.exports = router;
