var fs = require("fs");

fs.rename("./india.txt", "bharat.txt", renameFileCompleted);

function renameFileCompleted(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}
