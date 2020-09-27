const server = require("http").createServer();
const io = require("socket.io")(server);
const {
  NEXT_ROUND,
  ANSWER_QUESTION,
  CREATE_LOBBY,
  JOIN_LOBBY,
  SET_INFO,
} = require("./constants");

const lobbies = {};
const connections = {};

io.on("connection", (socket) => {
  connections[socket.id] = {
    isHost: false,
    lobby: null,
    points: 0,
    name: "",
    pronoun: "",
    pronunciation: "",
  };
  console.log("CONNECTION");

  socket.on(CREATE_LOBBY, () => {
    console.log("CREATING_LOBBY");
    connections[socket.id].isHost = true;
    connections[socket.id].lobby = createRandomAlphanum();
    lobbies[connections[socket.id].lobby] = { host: [socket.id], players: [] };
    io.to(socket.id).emit(CREATE_LOBBY, { user: connections[socket.id] });
    console.log(CREATE_LOBBY, { user: connections[socket.id] });
  });

  socket.on(JOIN_LOBBY, ({ lobby }) => {
    if (connections[socket.id].lobby !== null) {
      return io
        .to(socket.id)
        .emit(JOIN_LOBBY, { error: "You are already in a lobby." });
    }
    if (lobbies.hasOwnProperty(lobby)) {
      connections[socket.id].lobby = lobby;
      lobbies[lobby].players.push(socket.id);
      return io
        .to(socket.id)
        .emit(JOIN_LOBBY, { user: connections[socket.id] });
    }
    io.to(socket.id).emit(JOIN_LOBBY, {
      error: `Your lobby code, ${lobby}, does not exist.`,
    });
  });

  socket.on("disconnect", () => {
    console.log("DC");
    if (connections[socket.id].isHost) {
      for (let playerId of lobbies[connections[socket.id].lobby].players) {
        io.to(playerId).emit("disconnect");
        delete connections[playerId];
      }
      delete lobbies[connections[socket.id].lobby];
    }
    delete connections[socket.id];
  });
});

server.listen(4242, () => {
  console.log("sockets listening");
});

// Helpers
const createRandomAlphanum = (length = 6) => {
  const possible = "BCDFGHJKLMNPQRSTUVWXYZ01234567890123456789";
  return new Array(length)
    .fill("")
    .map(() => possible[Math.floor(Math.random() * possible.length)])
    .join("");
};
