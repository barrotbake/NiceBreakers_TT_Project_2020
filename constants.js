module.exports = {
  // WebSocket Event Constants
  NEXT_ROUND: "next-round", // -> Client
  ANSWER_QUESTION: "answer-question", // -> Server
  CREATE_LOBBY: "create-lobby", // -> Server
  JOIN_LOBBY: "join-lobby", // -> Server
  SUBMIT_FORM: "submit-form",
  PLAYER_JOINED: "player-joined",

  // Scene Constants
  SET_INFO: "set-info", // -> Server; Sets the name, prefered pronoun, and name pronunciation of a user
  WAITING: "Waiting",
  TWO_TRUTHS_AND_A_LIE: "Two Truths and a Lie",

  // Miscellaneous Constants
  HOST: "localhost:4242",
};
