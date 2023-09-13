const path = require("path");
const fsPromises = require("fs").promises;

const fileOpen = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "file.txt"),
      "utf8"
    );
    console.log(data);
  } catch (err) {
    throw err;
    // console.error(err);
  }
};

const writefile = async () => {
  try {
    await fsPromises.writeFile(
      path.join(__dirname, "files", "write.txt"),
      "Writing file using Async and Await Method"
    );
    console.log("Writig Completed");
  } catch (err) {
    console.error(err);
  }
};


const appendFile = async () =>{
    try{
        await fsPromises.appendFile(path.join(__dirname,"files", "new.txt"),"New File is Created");
        console.log("Content Appended");
    }catch(err){
        console.error(err);
    }
}

const renameFile = async () =>{
    try{
        await fsPromises.rename(path.join(__dirname,"files", "new.txt"),path.join(__dirname,"files","asyncNewText.txt"));
        console.log("Rename Successfully");
    }catch(err){
        console.error(err);
    }
}

const deleteFile = async () =>{
    try{
        await fsPromises.unlink(path.join(__dirname,"files","delete.txt"));
        console.log("Deleted");
    }catch(err){
        console.error(err);
    }
}


process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error : ${err}`);
  process.exit(1);
});

fileOpen();
// writefile();
// appendFile();
// renameFile();
// deleteFile();