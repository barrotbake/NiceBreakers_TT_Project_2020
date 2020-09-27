import { Component } from "react";
import User_Create_Form from "../../components/create-game-component/create-form"
import Host_Join_Lobby from "../../components/host-join-lobby-component/host-join-lobby"
import MainContainer from "../../components/mainContainer/MainContainer"
import Content from "../../components/content/Content"
import io from "socket.io-client";
import * as constants from "../../constants";

export default class Host extends Component {
  constructor() {
    super();
    this.state = {
      scene: constants.USER_CREATE_FORM,
      socket: null,
      user: null,
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
    this.setState({socket})
    socket.emit(constants.CREATE_LOBBY);

    socket.on(constants.CREATE_LOBBY, ({ user }) => {
      console.log(constants.CREATE_LOBBY, { user });
      this.setState((state) => ({
        user,
        round: state.round,
      }));
    });

    socket.on(constants.HOST_JOIN_LOBBY, ({ activities }) => {
      this.setState({
        scene: constants.HOST_JOIN_LOBBY
      })
    });

    socket.on(constants.PLAYER_JOINED, ({ players }) => {
      this.setState({ players });
    });
  }

  render() {
    let lobby = (this.state.user != null) ? this.state.user.lobby : "abc123"
    return (
      <MainContainer>
        <h1> Code: {lobby} </h1>
        <Content scene={this.state.scene} socket={this.state.socket} data={this.state}/>
      </MainContainer>
    );
  }
}
