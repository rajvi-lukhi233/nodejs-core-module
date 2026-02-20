console.log("child started.");

process.on("message", (data) => {
  console.log("Message from parent:", data);
  const result = data.number * 10;

  process.send({ result });
  process.exit();
});
