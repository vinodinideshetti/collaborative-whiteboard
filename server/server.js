const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("drawing", (data) => {
    socket.broadcast.emit("drawing", data);
  });

  socket.on("clear", () => {
    socket.broadcast.emit("clear");
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
