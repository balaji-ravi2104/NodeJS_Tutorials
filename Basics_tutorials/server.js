// console.log("Hello Balaji");
// console.log(global);

// Some os based methods
// const os = require("os");
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.release());


// This is specifiy the directory and filename
// console.log(__dirname);
// console.log(__filename);

// By using path we can find these details
// const path = require("path");
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
// console.log(path.parse(__filename).dir);


//url module 

// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2023&month=may';
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'
// console.log(qdata.year); // returns 2017


// Importing modules from another file
// const modules = require("./modules");
// const {add,sub,mil,div} = require("./modules");
// 




const http = require("http");
const fs = require('fs');
const path = require('path');
const PORT = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200,{'content-type' : 'text/html'});
    fs.readFile(path.join(__dirname,'index.html'),"utf8",(err,data) =>{
      if(err){
          res.writeHead(404);
          res.write('Page Not Found');
      }else{
          res.write(data);
      }
      res.end();
    }) 
  }); 
  
  server.listen(PORT, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Server running on " + PORT);
    }
  });
   

  // =================================================
// HTTP get parameters
// =================================================
//  - 'url' is the predefined module in node.
//  - url module is used to read get parameters in http server.

// //import http module
// let http = require("http");
// //import url module
// let url = require("url");
// let server = http.createServer((req, res) => {
//   let obj = url.parse(req.url, true).query;
//   //set MIME type
//   res.writeHead(200, { "content-type": "text/html" });
//   let uname = obj.uname;
//   let upwd = obj.upwd;
//   if (uname == "admin" && upwd == "admin") 
//     res.write("<h1>Login Success</h1>");
//   else 
//     res.write("<h1>Login Failed</h1>");
//   res.end();
// });
// //assign port no
// server.listen(8080);
// console.log("Server listening port no 8080");

// //url :- http://localhost:8080/?uname=admin&upwd=admin
