import express from "express";
import socketIO from "socket.io";
import next from "next";
import { createServer } from "http";
import {
  NEXT_ROUND,
  ANSWER_QUESTION,
  CREATE_LOBBY,
  JOIN_LOBBY,
  SET_INFO,
} from "./constants.mjs";
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, quiet: false });
const handle = app.getRequestHandler();
const expressServer = express();
const server = createServer(expressServer);
const io = socketIO(server);

const connected = {};

app.prepare().then(() => {
  io.on("connection", (socket) => {
    connected[socket.id] = {};

    socket.on(ANSWER_QUESTION, (details) => {});

    socket.on("disconnect", () => {
      delete connected[socket.id];
    });
  });

  expressServer.all("*", (req, res) => {
    return handle(req, res);
  });

  expressServer.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
