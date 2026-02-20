//exec() is buffer based only use for small data

const { exec } = require("child_process");

exec("ls -la", (error, stdout, stderr) => {
  if (error) {
    console.log("error : ", error.message);
  }
  if (stderr) {
    console.log("stderr", stderr.trim());
  }
  console.log("getting folder : ", stdout);
});
