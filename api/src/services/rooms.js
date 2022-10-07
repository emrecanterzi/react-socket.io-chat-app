const fs = require("fs");
const path = require("path");

const getRooms = () => {
  const rooms = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "database", `rooms.json`))
  );

  return rooms;
};

const createRoom = (name) => {
  const rooms = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "database", `rooms.json`))
  );
  const id = rooms[rooms.length - 1]?.id + 1 || 1;

  rooms.push({
    id,
    name,
  });

  fs.writeFileSync(
    path.join(__dirname, "..", "database", `messages-${id}.json`),
    JSON.stringify([])
  );
  fs.writeFileSync(
    path.join(__dirname, "..", "database", `rooms.json`),
    JSON.stringify(rooms)
  );
};
const deleteRoom = (id) => {
  let rooms = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "database", `rooms.json`))
  );

  rooms = rooms.filter((room) => room.id != id);

  fs.unlinkSync(
    path.join(__dirname, "..", "database", `messages-${id}.json`),
    JSON.stringify([])
  );

  fs.writeFileSync(
    path.join(__dirname, "..", "database", `rooms.json`),
    JSON.stringify(rooms)
  );
};

module.exports = {
  getRooms,
  createRoom,
  deleteRoom,
};
