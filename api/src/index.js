const http = require("http");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const app = require("express")();
const { Server } = require("socket.io");
const { addMessage, getMessages } = require("./services/message");
const { getRooms } = require("./services/rooms.Js");
const { login, signup } = require("./services/auth");
const { createRoom, deleteRoom } = require("./services/rooms");
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

dotenv.config({ path: path.join(__dirname, "config", ".env") });
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

io.on("connect", (socket) => {
  socket.on("createRoom", ({ name }) => {
    createRoom(name);
    io.emit("getRooms", getRooms());
  });

  socket.on("deleteRoom", ({ id }) => {
    deleteRoom(id);
    io.emit("getRooms", getRooms());
  });

  socket.on("getRooms", () => {
    socket.emit("getRooms", getRooms());
  });

  socket.on("getMessages", ({ roomId }) => {
    socket.emit("getMessages", getMessages(roomId));
  });

  socket.on("addMessage", ({ user, message, roomId }) => {
    addMessage(user, roomId, message);
    io.emit("getMessages", getMessages(roomId));
  });
  socket.on("login", ({ userName, password }) => {
    socket.emit("login", login(userName, password));
  });
  socket.on("signup", ({ userName, password }) => {
    socket.emit("login", signup(userName, password));
  });
});

server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
