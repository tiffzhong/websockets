const express = require("express");
const socket = require("socket.io");
const app = express();

const PORT = 4000;
const server = app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

app.use(express.static("public"));

//socket set up
const io = socket(server);
io.on("connection", function(socket) {
  console.log("socket connected");
});
