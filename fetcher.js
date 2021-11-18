const request = require("request");
const fs = require("fs");

let args = process.argv.slice(2);
const url = args[0];
const path = args[1];

request(url, (error, response, body) => {
  fs.writeFile(path, body, (error) => {
    if (error) {
      console.log(`Fail to save file: ${error}`);
      return;
    }

    fs.stat(path, (err, stats) => {
      if (error) {
        console.log(`Fail to read file: ${error}`);
        return;
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
    });
  });
});
