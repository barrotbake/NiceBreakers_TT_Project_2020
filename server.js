import express from "express";
import next from "next";
import { createServer } from "http";
import { ExpressPeerServer } from "peer";

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const expressServer = express();
const server = createServer(expressServer);
const peerServer = ExpressPeerServer(server, {
  allow_discovery: true,
  debug: true,
});

const connected = [];

app.prepare().then(() => {
  expressServer.use("/connect", peerServer);

  peerServer.on("connection", (id) => {
    if (!connected.includes(id)) {
      connected.push({ id });
    }
  });

  peerServer.on("disconnect", (id) => {
    const clientIndex = connected.indexOf(id);
    if (clientIndex !== -1) {
      connected.splice(clientIndex, 1);
    }
  });

  peerServer.on("error", (error) => {
    console.log("PEERJS ERROR", { error });
  });

  expressServer.get("/connect/:channel", (req, res) => {
    const { channel } = req.params;
    const clientsInChannel = connected.filter((client) =>
      client.id.startsWith(channel)
    );
    return res.json(clientsInChannel);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
