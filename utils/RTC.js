import "isomorphic-fetch";
import EventEmitter from "eventemitter3";
import Peer from "peerjs";

const events = new EventEmitter();

const generateConnectionId = (channelId) => {
  const numbers = new Uint32Array(1);
  (window.crypto || window.msCrypto).getRandomValues(numbers);
  return `${channelId}-${numbers[0]}`;
};

export default class RTC {
  constructor() {
    this.peer = null;
    this.connections = [];
  }

  async initializeChannel(channelId) {
    this.peer = new Peer(generateConnectionId(channelId), signal);
    this.peer.on("error", this.onError);
    this.peer.on("close", this.onClose);
    this.peer.on("disconnected", this.onDisconnected);
    this.peer.on("connection".this.onConnection);
  }

  async establishConnection(channelId) {
    let connectionId = 0;
    while (true) {
      const idCandidate = `${channelId}-${connectionId}`;
      const peer = new Peer(idCandidate, signal);
      const isConnected = await new Promise((resolve, reject) => {
        peer.on("error", (error) => {
          if (error.type === "unavailable-id") {
            peer.destroy();
            connectionId++;
            resolve(false);
          }
        });
        peer.on("open", () => {
          resolve(true);
        });
      });
      if (isConnected) {
        return peer;
      }
    }
  }
}
