const path = require("path");
const fs = require("fs");

const login = (userName, password) => {
  const users = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "database", "users.json"))
  );
  return users.find(
    (user) => user.userName == userName && user.password == password
  );
};

const signup = (userName, password) => {
  let users = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "database", "users.json"))
  );

  users.push({ id: users[users.length - 1]?.id + 1 || 0, userName, password });

  fs.writeFileSync(
    path.join(__dirname, "..", "database", "users.json"),
    JSON.stringify(users)
  );

  return users.find(
    (user) => user.userName == userName && user.password == password
  );
};

module.exports = { login, signup };
