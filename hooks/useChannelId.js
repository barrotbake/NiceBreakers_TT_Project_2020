import { useState } from "react";

export const useChannelId = () => {
  const [connection] = useState(null);
  return connection;
};
