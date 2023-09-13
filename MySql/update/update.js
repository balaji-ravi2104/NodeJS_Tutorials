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
  console.log(req.body);
  let p_id = req.body.p_id;
  let p_name = req.body.p_name;
  let p_cost = req.body.p_cost;


  connection.query(
    `update products set p_name='${p_name}',p_cost=${p_cost} where p_id = ${p_id}`,
    (err, result) => {
      if (err) {
        res.json({ "update": "Error " + err });
      } else {
        if (result.affectedRows != 0) {
          console.log("Data updated");
          res.json({ "update ": "success" });
        } else {
          console.log("Not inserted");
          res.json({ "update ": "error" });
        }
      }
    }
  );
});

module.exports = router;
