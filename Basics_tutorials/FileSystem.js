const fs = require("fs");
const path = require("path");

// Giving the path as hote coded value is not a good practice  instead

// fs.readFile("./files/file.txt", "utf8", (err, data) => {
//   if (err) throw err;

//   // console.log(data.toString()); if we don't mention the 'utf8' then use this line
//   console.log(data);
// });

// Good practice for giving path

fs.readFile(path.join(__dirname, "files", "file.txt"), "utf8", (err, data) => {
  if (err) throw err;

  console.log(data);
});


fs.writeFile(
  path.join(__dirname, "files", "write.txt"),
  "Hii Balaji Ravi",
  (err, data) => {
    if (err) throw err;

    console.log("Content Writed Successfully");

    // After writing the content if we want to append the content into the same file use this type of code like 
    // one after another methods we have  call.. it is same in async & await as well 
    fs.appendFile(
      path.join(__dirname, "files", "write.txt"),
      "\n\nWelcome to node js Course",
      (err, data) => {
        if (err) throw err;
    
        console.log("Content append Successfully");
      }
    );
  }
);


fs.appendFile(
  path.join(__dirname, "files", "new.txt"),
  "If we use Append method, for the non-existing file.. then it will create the new file!!",
  (err, data) => {
    if (err) throw err;

    console.log("New File created and content append Successfully");
  }
);


// Renaming file

fs.rename(
  path.join(__dirname, "files", "new.txt"), path.join(__dirname,"files","newText.txt"), (err) =>{
    if(err) throw err;

    console.log("Renamed Successfully");
  }
);

// For deleting the File

fs.unlink(path.join(__dirname,"files","delete.txt"),function(err,data){
    console.log("deleted");
})


// exit on uncaught error

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error : ${err}`);
  process.exit(1);
});
