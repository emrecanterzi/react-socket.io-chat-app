const fs = require("fs");
const path = require("path");

const addMessage = (user, roomId, message) => {
  const messages = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "..", "database", `messages-${roomId}.json`)
    )
  );
  messages.push({
    id: messages[messages.length - 1]?.id + 1 || 1,
    sender: user,
    message: message,
    date: Date.now(),
  });

  fs.writeFileSync(
    path.join(__dirname, "..", "database", `messages-${roomId}.json`),
    JSON.stringify(messages)
  );
};

const getMessages = (roomId) => {
  const messages = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "..", "database", `messages-${roomId}.json`)
    )
  );

  return messages;
};

module.exports = { addMessage, getMessages };
