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

router.delete("/", (req, res) => {
  let p_id = req.body.p_id;

  connection.query(
    `delete from products where p_id = ${p_id}`,
    (err, result) => {
      if (err) {
        res.json({ "delete": "Error " + err });
      } else {
        if (result.affectedRows != 0) {
          console.log("Data updated");
          res.json({ "delete": "success" });
        } else {
          console.log("Not inserted");
          res.json({ "delete": "error" });
        }
      }
    }
  );
});

module.exports = router;
