// let http = require('http')
// let server = http.createServer((req, res) => {
//     //set MIME type
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write('<h1> Welcome to http server</h1>')
//     res.end()
// })
// server.listen(8080)
// console.log('Server listening port no 8080')

// =================================================
// HTTP get parameters
// =================================================
//  - 'url' is the predefined module in node.
//  - url module is used to read get parameters in http server.

// import http module
// let http = require("http");
// // import url module
// let url = require("url");
// let server = http.createServer((req, res) => {
//   // console.log(req.url);
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

//url :- http://localhost:8080/?uname=admin&upwd=admin

// =================================================
// HTTP post parameters
// =================================================
//  - 'querystring' is the predefined module in nodejs.
//  - querystring module is used to read post parameters
//    in http server

//import http module
let http = require('http')
//import query string module
let qs = require('querystring')
// create server
let server = http.createServer((req, res) => {
    //set MIME type
    res.writeHead(200, { 'content-type': 'text/html' })
    let body = ""
    //listen post parameters
    req.on("data", (result) => {
      console.log(result.toString());
        body = body + result
    })
    //end call back to node engine
    req.on("end", () => {
        obj = qs.parse(body)
        //read post parameters
        let uname = obj.uname
        let upwd = obj.upwd
        if (uname === 'admin' && upwd === 'admin')
            res.write("<h1 style = 'color:Green'>Login Success</h1>")
        else
            res.write("<h1 style = 'color:red'>Login Failed</h1>")
        res.end()
    })
})
//assign port no
server.listen(8080)
console.log("Server Listening port no 8080")







// Express JS









// let express = require("express");
// let bodyparser = require("body-parser");
// const obj = require('../config/config.js');
// const my_fun = require("../config/config1.js")

// //create rest object
// let app = express(); //where app is rest object
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: false }));

let port = 8080;
// //create get request
// app.get("/", (req, res) => {
//     console.log('Default get request')
//     res.send({ 'message': 'Default get request' })
//     //res.json({'message':'Default get request'})
// })
// app.get("/fetch", (req, res) => {
//     res.json({ 'message': 'fetch get request' })
// })
// app.post("/", (req, res) => {
//     res.send({ 'message': 'default post request' })
// })
// //create one more post request
// app.post("/login", (req, res) => {
//     res.send({ 'message': 'login post request' })
// })

// app.put("/", (req, res) => {
//   res.send({ 'message': 'default put request' })
// })
// //create port
// let port = 8080
// //assign port no
// app.listen(port, () => {
//     console.log('Server listening port no ', port)
// })

// get using express
// app.get("/login", (req, res) => {
//   let uname = req.query.uname;
//   let upwd = req.query.upwd;

//   if (uname === "admin" && upwd === "admin") {
//     res.send("Success");
//   } else {
//     res.send("Failed");
//   }
// });

// http://localhost:8080/login/admin/admin

// app.get("/login/:uname/:upwd",(req, res)=>{
//   //params is the predefined key used to read parameters from url
//   let uname = req.params.uname
//   let upwd = req.params.upwd
  
//   if(uname === 'admin' && upwd === 'admin')
//       res.json({'login':'success'})
//   else
//       res.json({'login':'failed'})
// })


// app.post("/register", (req, res) => {
//   let uname = req.body.uname;
//   let pass = req.body.password;
//   // console.log("body:- ", req.body);
//   // console.log(uname + " " + pass);
//   if (uname === "Balaji" && pass === "Balaji") {
//     res.send(`Register Done ${uname}`);
//   } else {
//     res.send(`Register Failed`);
//   }
// });


// app.get("/",(req,res)=>{
//   res.json(obj);
// })


// // http://localhost:8080/login?uname=admin&upwd=admin

// app.get("/login",(req,res)=>{
//   res.send(my_fun(req.query.uname, req.query.upwd))
// })

// app.listen(port, (req,res) => {
//   console.log("Server listening port no ", port);
// });
