const { fork } = require("child_process");
const path = require("path");

const childPath = path.join(__dirname, "fork-child.js");
const child = fork(childPath);

console.log("Parent started.");

// send data to child
child.send({ number: 5 });

child.on("message", (message) => {
  console.log("Message from child:", message);
});
// Listen when child exits
child.on("exit", (code) => {
  console.log("Child exited with code:", code);
});
