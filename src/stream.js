const fs = require("fs");

// Create readable stream (read file)
const readStream = fs.createReadStream("src/public/input.json", {
  encoding: "utf-8",
});

// Create writable stream (write file)
const writeStream = fs.createWriteStream("src/public/output.json");

// When data comes in chunks
readStream.on("data", (chunk) => {
  console.log("Received chunk:");
  writeStream.write(chunk);
});

// When reading is finished
readStream.on("end", () => {
  console.log("File reading completed.");
  writeStream.end();
});

// Handle error
readStream.on("error", (err) => {
  console.error("Error:", err);
});
