import { withRouter } from "next/router";
import MainContainer from "../../components/mainContainer/MainContainer";
import SweetAlert from "sweetalert2";
import Content from "../../components/content/Content";
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

class Play extends Component {
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
    socket.emit(JOIN_LOBBY, { lobby: this.props.router.query.code });

    socket.on(JOIN_LOBBY, ({ user, error }) => {
      console.log(JOIN_LOBBY, { user, error });
      if (error !== undefined) {
        return showError(error);
      }
      this.setState((state) => ({
        user,
        round: state.round,
      }));
    });
  }

  render() {
    return (
      <div>
        <MainContainer>
          <Content scene="Two Truths and a Lie" />
        </MainContainer>
        <pre>
          <code>{JSON.stringify(this.state, null, 2)}</code>
        </pre>
      </div>
    );
  }
}

export default withRouter(Play);

const showError = (info, message = "Oops...") =>
  SweetAlert.fire({
    icon: "error",
    title: message,
    text: info,
  });

const showSuccess = (info, message = "Yay!!!") =>
  SweetAlert.fire({
    icon: "success",
    title: message,
    text: info,
  });
