const express = require("express");
const { Worker } = require("worker_threads");
const app = express();
const path = require("path");

app.get("/fibonacci/:num", (req, res) => {
  const num = parseInt(req.params.num);
  const workerPath = path.join(__dirname, "worker.js");
  const worker = new Worker(workerPath, {
    workerData: num,
  });
  worker.on("message", (result) => {
    res.send(`Fibonacci result: ${result}`);
  });

  worker.on("error", (err) => {
    res.status(500).send(err.message);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
