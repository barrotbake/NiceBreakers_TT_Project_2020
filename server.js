const server = require("http").createServer();
const io = require("socket.io")(server);
io.on("connection", (client) => {
  console.log("connected", { client });
  client.on("event", (data) => {
    console.log("event", { data });
  });
  client.on("disconnect", () => {
    console.log("disconnect");
  });
});
server.listen(4242, () => {
  console.log("sockets listening");
});
