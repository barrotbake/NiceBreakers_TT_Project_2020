import io from "socket.io-client";
import { useEffect, useState } from "react";
import { NEXT_ROUND, HOST } from "../constants.js";

let socket = io(HOST);

export const useRound = () => {
  const [round, setRound] = useState({
    finishBy: Infinity, // timestamp for when question is supposed to end
    leaders: [], // users ordered by highest score
    roundType: null, // Two Truths and a Lie, Fun Fact
    pointsEarned: 0, // How many points earned from the last round
    roundNumber: 0,
    totalRounds: 0,
  });
  useEffect(() => {
    socket.on(NEXT_ROUND, (serializedRoundDetails) => {
      const roundDetails = JSON.parse(serializedRoundDetails);
      console.log({ serializedRoundDetails, roundDetails });
      setRound({
        finishBy: roundDetails.finishBy,
        leaders: roundDetails.leaders,
        roundType: roundDetails.roundType,
        pointsEarned: roundDetails.pointsEarned,
        roundNumber: roundDetails.roundNumber,
        totalRounds: roundDetails.totalRounds,
      });
    });
  }, []);
  return round;
};
