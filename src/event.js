const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("userRegistered", (user) => {
  console.log(`Welcome email sent to ${user.email}`);
  console.log(`User ${user.name} registered successfully`);
});

function registerUser(name, email) {
  const user = { name, email };

  console.log("User saved to database");

  // Trigger event
  emitter.emit("userRegistered", user);
}

registerUser("rajvi", "rajvi@gmail.com");
