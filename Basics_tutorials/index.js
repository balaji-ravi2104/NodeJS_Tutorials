// This file is about npm install concepts .. mainly for nodemon

console.log("Hello");
console.log("Balaji"); 

const {format} = require("date-fns");

console.log(format(new Date(), 'ddMMyyyy\tHH:mm:ss'));  


const {v4 : uuid} = require("uuid")

// Here v4 is we are importing name... but uuid(we can give any name) is a alise name ...
// Like in import method we use as keyword but here we use (:)..

console.log(uuid()); 