// Modules in NodeJS
// •  Node supports modules
// •  Predefined modules
// •  Custom modules

//   (or)

// Core Modules
// local Modules
// Third-party Modules



// 2  http
// •  This is the native module.
// •  This module is available along with 'Node Engine'.
// •  This module is used to develop http servers.

// 3  url
// •  This is native module.
// •  This module is used to read get parameters in http servers.

// 4  query-string
// •  This is native module.
// •  This module is used to read the post parameters in http servers.

// 5  fs
// •  This is native module.
// •  fs stands for 'File system'.
// •  This module is used to interact with flat files.
// •  Eg:- txt, xml, json, etc
// •
// 6  express
// •  This is third party module.
// •  This module is used to develop 'ReST APIs' (web services.)
// •  ReST API:- Representational State Transfer Application Programing Interface.
// 7  mysql
// •  This is third party module.
// •  This module is used to interact with My Sql database.
// •
// 8  mongodb
// •  This is third party module.
// •  This module is used to interact with mongodb without schema.
// •  [Note:- rules and regulations of db are called as schema].
// •
// 9  mongoose
// •  This is third party module.
// •  This module is used to interact with mongodb with schema.
// •
// 10  mssql
// •  This is third party module.
// •  This module is used to interact SQL Server.
// •
// 11  multer
// •  This is third party module.
// •  This module is used to upload images to server.
// •
// 12  socket.io
// •  This is third party module.
// •  This module is used to develop chat applications.
// •
// 13  jwt-simple
// •  This is third party module.
// •  This module is used to generate tokens for authentication purpose.
// •  This system is technically called as Token based authentication system. •

// 14  body-parser
// •  This is third party module.
// •  This module is used to set MIME type.
// •
// 15  cluster
// •  This is third party module.
// •  This module is used to implement child process in http server.
// •  implementing child process is called as load balancing.

// 16  express-cluster
// •  This third party module.
// •  This module is used to implement load balancing in ReST APIs.

// 17  cookie-parser
// •    This is third party module.
// •    This module is used to work with cookies.


// Example for Local Modules

exports.add = (a,b) => a+b;
exports.sub = (a,b) => a-b;
exports.mul = (a,b) => a*b;
exports.div = (a,b) => a/b;

// module.exports = {add,sub,mul,div};



// Third-party modules: Third-party modules are modules that are available online using the Node Package Manager(NPM). 
// These modules can be installed in the project folder or globally. 
// Some of the popular third-party modules are Mongoose, express, angular, and React. 

// Example:
// npm install express
// npm install mongoose