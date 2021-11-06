var fs = require("fs");
var content = "India Is Great";
fs.writeFile("./india.txt", content, "utf8", fileWritingComplete);

function fileWritingComplete(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}
