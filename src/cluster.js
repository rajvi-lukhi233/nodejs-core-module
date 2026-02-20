const cluster = require("cluster");
const os = require("os");
const http = require("http");

const numCPUs = os.cpus().length;
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);
  console.log(`Forking ${numCPUs} workers...\n`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    console.log("Starting a new worker");
    cluster.fork();
  });
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Handled by worker ${process.pid}`);
    })
    .listen(5000);

  console.log(`Worker ${process.pid} started`);
}
