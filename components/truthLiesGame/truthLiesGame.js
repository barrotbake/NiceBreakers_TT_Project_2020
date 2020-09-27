import styles from "./truthLiesGame.module.css";

class TruthLiesGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      won: false,
      gameOver: false,
      submitted: false,
      truth1: "",
      truth2: "",
      lie: "",
      player2: null,
    };
  }

  componentDidMount() {
    this.props.socket.on("everyone-submitted", ({ player2 }) => {
      console.log({ player2 });
      this.setState({ player2, submitted: true });
    });
  }

  render() {
    if (this.state.gameOver) {
      return <h1>It was not a lie</h1>;
    }
    if (this.state.won) {
      return <h1>YOU WIN!!!</h1>;
    }
    if (this.state.submitted) {
      const isLieFirst = Math.random() > 0.5;
      return (
        <div>
          <h1>Player 2</h1>
          <p>Choose the lie 🙈</p>
          <button
            onClick={() => {
              if (isLieFirst) {
                return this.setState({ won: true });
              }
              this.setState({ gameOver: true });
            }}
          >
            {isLieFirst ? this.state.player2.lie : this.state.player2.truth1}
          </button>
          <button
            onClick={() => {
              if (!isLieFirst) {
                return this.setState({ won: true });
              }
              this.setState({ gameOver: true });
            }}
          >
            {isLieFirst ? this.state.player2.truth1 : this.state.player2.lie}
          </button>
          <button
            onClick={() => {
              this.setState({ gameOver: true });
            }}
          >
            {this.state.player2.truth2}
          </button>
        </div>
      );
    }
    return (
      <div>
        <h1>2 Truths and a Lie</h1>
        <form>
          <input type="string" name="truth1" placeholder="First Truth" />
          <br />
          <input type="string" name="truth2" placeholder="Second Truth" />
          <br />
          <input type="string" name="lie" placeholder="Lie" />
          <br />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const form = new FormData(e.target.parentNode);
              const truth1 = form.get("truth1");
              const truth2 = form.get("truth2");
              const lie = form.get("lie");
              console.log({ truth1, truth2, lie }, this.props.data);
              this.props.socket.emit("game-submitted", {
                truth1,
                truth2,
                lie,
                player2: this.props.data.foes.player2,
                player3: this.props.data.foes.player3,
              });
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default TruthLiesGame;
