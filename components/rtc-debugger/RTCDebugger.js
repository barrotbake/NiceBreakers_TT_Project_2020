import { useState } from "react";
import RTC from "../../utils/RTC";

// Reference
// - P2P Connection Example: https://github.com/jmcker/Peer-to-Peer-Cue-System
// - Konami Code Example: https://github.com/joelnet/konami-code-react-component/blob/main/src/App.js

const RTCDebugger = (props) => {
  const rtc = new RTC();
  rtc.initialize();
  const rtc = useRTC();
  /*
  rtc = {
    id: "<CURRENT_CLIENT_ID>",
    lobbyId: "<CURRENT_LOBBY_ID>",
    moderator: "<CONNECTION_TO_MODERATOR>",
    lobbyMembers: [] // List of connections to other members
    join(id) {
      // Joins via LobbyId
    }
    send(id, message) {
      // Sends a message to someone
    }
    broadcast(message) {
      // Sends a message to all lobbyMembers
    }
  };
  */
  return (
    <div>
    
      <label>Join ID:</label>
      <span>{rtc.lobbyId}</span>
    
      <label>ID:</label>
      <input
        type="text"
        onChange={event => {
          rtc.join(event.target.value);
          event.target.value = "";
          console.log("JOIN_ATTEMPT", { rtc });
        }}
      />
      
      <label>Message:</label>
      <input
        type="text"
        onChange={event => {
          rtc.broadcast(event.target.value);
          event.target.value = "";
          console.log("MESSAGE_ATTEMPT", { rtc });
        }}
       />
      
    </div>
  );
}

export default RTCDebugger;
