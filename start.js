const childfork = require("child_process");
const fs = require("fs");

function exec(
  cmd,
  handler = function (error, stdout, stderr) {
    console.log(stdout);
    if (error !== null) {
      console.log(stderr);
    }
  }
) {
  return childfork.exec(cmd, handler);
}

if (!fs.existsSync("./api/node_modules")) {
  exec("cd api && npm start");
} else {
  exec("cd api && npm i && npm start");
}
console.log("api start on http://localhost:4000");

if (!fs.existsSync("./frontend/node_modules")) {
  exec("cd frontend && npm start");
} else {
  exec("cd frontend && npm i && npm start");
}
console.log("app start on http://localhost:3000");
