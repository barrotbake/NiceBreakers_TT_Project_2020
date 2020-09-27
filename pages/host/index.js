import { Component } from "react";
import io from "socket.io-client";
import {
  NEXT_ROUND,
  ANSWER_QUESTION,
  CREATE_LOBBY,
  JOIN_LOBBY,
  SET_INFO,
  HOST,
} from "../../constants";

export default class Host extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      round: {
        finishBy: Infinity, // timestamp for when question is supposed to end
        leaders: [], // users ordered by highest score
        roundType: null, // Two Truths and a Lie, Fun Fact
        pointsEarned: 0, // How many points earned from the last round
        roundNumber: 0,
        totalRounds: 0,
      },
    };
  }

  componentDidMount() {
    const socket = io.connect(HOST);
    socket.emit(CREATE_LOBBY);

    socket.on(CREATE_LOBBY, ({ user }) => {
      console.log(CREATE_LOBBY, { user });
      this.setState((state) => ({
        user,
        round: state.round,
      }));
    });
  }

  render() {
    return (
      <pre>
        <code>{JSON.stringify(this.state, null, 2)}</code>
      </pre>
    );
  }
}
