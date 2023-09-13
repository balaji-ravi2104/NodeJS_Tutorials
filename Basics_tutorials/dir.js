const fs = require("fs");

//If directory is not exits then create a new Directory 

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;

    console.log("Directory Created!!");
  });
}


//If directory is exits then remove a Directory

if (fs.existsSync("./new")) {
    fs.rmdir("./new", (err) => {
      if (err) throw err;
  
      console.log("Directory Removed!!");
    });
}
  

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error : ${err}`);
  process.exit(1);
});
