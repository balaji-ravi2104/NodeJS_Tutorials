const express = require("express");

const mongodb = require("mongodb");

const url = require("../url");

let mcl = mongodb.MongoClient;

let router = express.Router();

router.post("/", (req, res) => {
  let obj = req.body;
  console.log(obj);
  mcl.connect(url, (err, conn) => {
    if (err) {
      console.log("Error" + err);
    } else {
      let db = conn.db("nodedb");
      db.collection("products").insertOne(obj, (err) => {
        if (err) {
          console.log("Error" + err);
        } else {
          console.log("Data Inserted");
          res.json({ insert: "success" });
          conn.close();
        }
      });
    }
  });
});

module.exports = router;
