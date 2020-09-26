import io from "socket.io-client";
import { useEffect, useState } from "react";
import { NEXT_ROUND, HOST } from "../constants";

let socket = io(HOST);

export const useRound = () => {
  // socket = io(HOST);
  const [round, setRound] = useState(null);
  useEffect(() => {
    socket.on(NEXT_ROUND, (serializedRoundDetails) => {
      const roundDetails = JSON.parse(serializedRoundDetails);
      console.log({ serializedRoundDetails, roundDetails });
      setRound(roundDetails);
      /*
      details = {
        timeLimit: 0 // timestamp for when question is supposed to end
        meta: {} // extra details that may be necessary for a round
        leaders: [] // users ordered by highest score
        roundType: "" // Two Truths and a Lie, Fun Fact
        pointsEarned: 0 // How many points earned from the last round
        roundNumber: 0 // 1-based index
        totalRounds: 0 // How many rounds are there
      }
      */
    });
  }, []);
  return round;
};
