import { withRouter } from "next/router";
import MainContainer from "../../components/mainContainer/MainContainer";
import SweetAlert from "sweetalert2";
import Content from "../../components/content/Content";
import { Component } from "react";
import io from "socket.io-client";
import * as constants from "../../constants";

class Play extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      socket: null,
      scene: constants.SET_INFO,
      players: [],
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
    const socket = io.connect(constants.HOST);
    this.setState({ socket });
    socket.emit(constants.JOIN_LOBBY, { lobby: this.props.router.query.code });

    socket.on(constants.JOIN_LOBBY, ({ user, error }) => {
      console.log(constants.JOIN_LOBBY, { user, error });
      if (error !== undefined) {
        return showError(error).then(() => this.props.router.back());
      }
      this.setState({ user, scene: constants.SET_INFO });
    });

    socket.on(constants.SUBMIT_FORM, ({ players }) => {
      this.setState({ players, scene: constants.WAITING });
    });

    socket.on(constants.PLAYER_JOINED, ({ players }) => {
      this.setState({ players });
    });
  }

  render() {
    return (
      <div>
        <MainContainer>
          <Content scene={this.state.scene} socket={this.state.socket} />
        </MainContainer>
        <pre>{/*}<code>{JSON.stringify(this.state, null, 2)}</code>{*/}</pre>
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
