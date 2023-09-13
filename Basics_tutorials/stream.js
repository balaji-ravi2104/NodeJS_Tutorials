const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(
  path.join(__dirname, "files", "bigfile.txt"),
  "utf8"
);
const ws = fs.createWriteStream(
  path.join(__dirname, "files", "new_bigfile.txt")
);

// rs.on('data',(dataChunck) =>{
//     ws.write(dataChunck);
// })

// Both are doing same work but pipe is bit efficient

rs.pipe(ws);

