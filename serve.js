const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const socketIO = require("socket.io");

const {
  NEXT_ROUND,
  ANSWER_QUESTION,
  CREATE_LOBBY,
  JOIN_LOBBY,
  PLAYER_JOINED,
  SET_INFO,
  SUBMIT_FORM,
  USER_CREATE_FORM,
  HOST_JOIN_LOBBY,
  TWO_TRUTHS_AND_A_LIE,
  START_GAME,
} = require("./constants");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const lobbies = {};
const connections = {};

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    return handle(req, res, parsedUrl);
  });

  const io = socketIO(server);
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
      lobbies[connections[socket.id].lobby] = {
        host: socket.id,
        players: [],
        activities: [],
      };
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
        return io
          .to(socket.id)
          .emit(JOIN_LOBBY, { user: connections[socket.id] });
      }
      io.to(socket.id).emit(JOIN_LOBBY, {
        error: `Your lobby code, ${lobby}, does not exist.`,
      });
    });

    socket.on(SUBMIT_FORM, ({ name, pronoun, pronunciation }) => {
      connections[socket.id].name = name;
      connections[socket.id].pronoun = pronoun;
      connections[socket.id].pronunciation = pronunciation;
      lobbies[connections[socket.id].lobby].players.push(socket.id);
      io.to(socket.id).emit(SUBMIT_FORM, {
        players: lobbies[connections[socket.id].lobby].players,
      });
      io.to(lobbies[connections[socket.id].lobby].host).emit(PLAYER_JOINED, {
        players: lobbies[connections[socket.id].lobby].players,
      });
    });

    socket.on(USER_CREATE_FORM, ({ activities }) => {
      // host continues after determining activities
      lobbies[connections[socket.id].lobby].activities = activities;
      io.to(socket.id).emit(HOST_JOIN_LOBBY, { activities });
    });

    socket.on(START_GAME, ({ game }) => {
      if (!connections[socket.id].isHost) {
        return io
          .to(socket.id)
          .emit(START_GAME, { error: "You must be the host to start a game." });
      }
      if (![TWO_TRUTHS_AND_A_LIE].includes(game)) {
        return io
          .to(socket.id)
          .emit(START_GAME, { error: "No valid game has been chosen." });
      }
      for (let playerId of lobbies[connections[socket.id].lobby].players) {
        io.to(playerId).emit(START_GAME, { game });
      }
    });

    socket.on("disconnect", () => {
      console.log("DC");
      if (connections[socket.id] && connections[socket.id].isHost) {
        for (let playerId of lobbies[connections[socket.id].lobby].players) {
          io.to(playerId).emit("disconnect");
          delete connections[playerId];
        }
        delete lobbies[connections[socket.id].lobby];
      }
      delete connections[socket.id];
    });
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});

// Helpers
const createRandomAlphanum = (length = 6) => {
  const possible = "BCDFGHJKLMNPQRSTUVWXYZ01234567890123456789";
  return new Array(length)
    .fill("")
    .map(() => possible[Math.floor(Math.random() * possible.length)])
    .join("");
};
