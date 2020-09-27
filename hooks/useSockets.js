import { useEffect, useState } from "react";
import io from "socket.io-client";
import { NEXT_ROUND, HOST, SET_INFO } from "../constants.js";

const createRandomAlphanum = (length = 6) => {
  const possible = "BCDFGHJKLMNPQRSTUVWXYZ01234567890123456789";
  return new Array(length)
    .fill("")
    .map(() => possible[Math.floor(Math.random() * possible.length)])
    .join("");
};

export const useRound = (code = createRandomAlphanum(6)) => {
  ws.on("open", () => {
    console.log("OPEN");
  });
  const [round, setRound] = useState({
    code,
    finishBy: Infinity, // timestamp for when question is supposed to end
    leaders: [], // users ordered by highest score
    roundType: null, // Two Truths and a Lie, Fun Fact
    pointsEarned: 0, // How many points earned from the last round
    roundNumber: 0,
    totalRounds: 0,
  });
  useEffect(() => {
    ws.on("message", (details) => {
      console.log("MESSAGE", { details });
      // const roundDetails = JSON.parse(serializedRoundDetails);
      // console.log({ serializedRoundDetails, roundDetails });
      // setRound({
      //   code: roundDetails.code,
      //   finishBy: roundDetails.finishBy,
      //   leaders: roundDetails.leaders,
      //   roundType: roundDetails.roundType,
      //   pointsEarned: roundDetails.pointsEarned,
      //   roundNumber: roundDetails.roundNumber,
      //   totalRounds: roundDetails.totalRounds,
      // });
    });
  }, []);
  return round;
};
