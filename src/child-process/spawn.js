//spawn() this is stream base used for learge data

const { spawn } = require("child_process");

const child = spawn("ls", ["-la"]);

child.stdout.on("data", (data) => {
  console.log("data", data.toString());
});