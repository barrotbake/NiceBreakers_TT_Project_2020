import Peer from "peerjs";

const signalConfig = {
  host: process.env.NODE_ENV === "production" ? "<OUR_DOMAIN>" : "localhost",
  port: process.env.NODE_ENV === "production" ? 443 : 3000,
  path: "/connect",
  debug: 2,
};

export default class RTC {
  constructor(room, connections = {}) {
    this.peer = null;
    this.conn = null;
    this.lastPeerId = "";
    this.room = room;
    this.connections = connections;
  }

  initialize() {
    this.peer = new Peer(null, signalConfig);
    this.peer.on("open", (id) => {
      if (peer.id === null) {
        peer.id = lastPeerId;
      } else {
        lastPeerId = peer.id;
      }
      console.log("OPEN", peer.id, { id });
    });
    this.peer.on("connection", (connection) => {
      connection.on("open", () => {
        connection.send("Cannot Connect");
        setTimeout(() => c.close(), 500);
        console.log("cannot connect");
      });
    });
    this.peer.on("disconnected", () => {
      console.log("connection lost");
      peer.id = lastPeerId;
      peer._lastServerId = lastPeerId;
      peer.reconnect();
    });
    this.peer.on("close", () => {
      conn = null;
      console.log("connection destroyed");
    });
    this.peer.on("error", (error) => {
      console.log({ error });
    });
  }

  send(message) {
    if (this.conn !== null && this.conn.open) {
      return this.conn.send(message);
    }
    console.log("tried to signal, but connection is closed");
  }

  join(id) {
    if (this.conn !== null) {
      this.conn.close();
      this.conn = null;
    }
    this.conn = this.peer.connect(id, { reliable: true });
    this.conn.on("open", () => {
      console.log("Connected to: ", conn.peer);
      conn.send("HelloWorld");
    });
    conn.on("data", (data) => {
      console.log("DATA", { data });
    });
    conn.on("close", () => {
      console.log("connection closed");
      conn = null;
    });
    conn.on("error", (error) => {
      console.log("join error", { error });
    });
  }
}
