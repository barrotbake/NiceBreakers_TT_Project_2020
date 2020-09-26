import { useEffect, useState } from "react";
import { useChannelId } from "./useChannelId";
import { useConnections } from "./useConnections";

const signal = {
  host: process.env.NODE_ENV === "production" ? "<OUR_DOMAIN>" : "localhost",
  port: process.env.NODE_ENV === "production" ? 443 : 3000,
  path: "/connect",
  debug: 2,
};

export const useRTC = (channelId) => {
  const [connection, setConnection] = useState(null);
  const connections = useConnections();
  const channelId = useChannelId();
  useEffect(async () => {});
  return connection;
};

// TODO:
// * https://www.youtube.com/watch?v=DvlyzDZDEq4
// * https://github.com/WebDevSimplified/Zoom-Clone-With-WebRTC
