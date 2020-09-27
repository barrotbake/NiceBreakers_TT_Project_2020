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

    socket.on(constants.START_GAME, ({ player2, player3 }) => {
      this.setState({
        scene: constants.TWO_TRUTHS_AND_A_LIE,
        foes: { player2, player3 },
      });
    });
  }

  render() {
    return (
      <div>
        <h1
          style={{
            position: "absolute",
            top: `15px`,
            left: `15px`,
            color: "white",
            fontSize: "1.7em",
            fontWeight: "500",
          }}
        >
          Code: {this.state.user ? this.state.user.lobby : ""}
          <br />
          Players: {this.state.players ? this.state.players.length : 0}
        </h1>
        <MainContainer>
          <Content
            scene={this.state.scene}
            socket={this.state.socket}
            data={this.state}
          />
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
