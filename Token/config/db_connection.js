//import mysql module

const mysql = require("mysql");

//import database properites

const db_properties = require("./db_properties");

//export connection
module.exports = {
  getConnection: () => {
    return mysql.createConnection(db_properties);
  },
};
