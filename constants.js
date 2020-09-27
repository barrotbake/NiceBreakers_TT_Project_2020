module.exports = {
  // WebSocket Event Constants
  NEXT_ROUND: "next-round", // -> Client
  ANSWER_QUESTION: "answer-question", // -> Server
  CREATE_LOBBY: "create-lobby", // -> Server
  JOIN_LOBBY: "join-lobby", // -> Server
  SUBMIT_FORM: "submit-form",
  PLAYER_JOINED: "player-joined",

  // Player Scene Constants
  SET_INFO: "set-info", // -> Server; Sets the name, prefered pronoun, and name pronunciation of a user
  WAITING: "Waiting",
  TWO_TRUTHS_AND_A_LIE: "Two Truths and a Lie",

  //Host Scene Constants
  USER_CREATE_FORM: "user-create-form",
  HOST_JOIN_LOBBY: "host-join-lobby", // start game

  // Miscellaneous Constants
  HOST: "localhost:4242",
};
