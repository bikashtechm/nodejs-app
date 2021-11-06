var fs = require("fs");
fs.readFile("./sample.txt", "utf8", receivedFileContent);

function receivedFileContent(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}
