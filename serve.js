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
const games = {};

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

    socket.on("game-submitted", ({ truth1, truth2, lie, player2, player3 }) => {
      const gameId = [socket.id, player2, player3]
        .filter((p) => p !== undefined)
        .sort()
        .join("");
      console.log({ games, gameId }, socket.id, player2, player3);
      games[gameId].push({ truth2, truth1, lie });
      const finished = games[gameId].length === 2;
      if (finished) {
        console.log(games[gameId]);
        io.to(socket.id).emit("everyone-submitted", {
          player2: games[gameId][0],
        });
        io.to(player2).emit("everyone-submitted", {
          player2: games[gameId][1],
        });
        if (player3) {
          io.to(player2).emit("everyone-submitted", {
            player2: games[gameId][1],
          });
        }
      }
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
      let willNeedGroupOf3 =
        lobbies[connections[socket.id].lobby].players.length % 2 > 0;
      const groups = lobbies[connections[socket.id].lobby].players.reduce(
        (acc, cur, i) => {
          if (acc === null) {
            acc = [[cur]];
          } else if (acc[0].length < willNeedGroupOf3 ? 3 : 2) {
            acc[0].push(cur);
            if (acc[0].length === 3) {
              willNeedGroupOf3 = false;
            }
          } else {
            acc.unshift([cur]);
          }
          return acc;
        },
        null
      );
      for (const [member1, member2, member3] of groups) {
        const gameId = [member1, member2, member3]
          .filter((p) => p !== undefined)
          .sort()
          .join("");
        games[gameId] = [];
        io.to(member1).emit(START_GAME, { player2: member2, player3: member3 });
        io.to(member2).emit(START_GAME, { player2: member1, player3: member3 });
        if (member3) {
          io.to(member3).emit(START_GAME, {
            player2: member1,
            player3: member2,
          });
        }
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
