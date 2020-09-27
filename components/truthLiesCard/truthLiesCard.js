import styles from "./truthLiesCard.module.css";


class TruthLiesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      found: false,
      points: 3,
      card1: {
        text: "",
        type: "truth",
      },
      card2: {
        text: "",
        type: "truth",
      },
      card3: {
        text: "",
        type: "truth",
      },
    };
    this.handleClickCard1 = this.handleClickCard1.bind(this);
    this.handleClickCard2 = this.handleClickCard2.bind(this);
    this.handleClickCard3 = this.handleClickCard3.bind(this);
  }

  randomizer() {
    if (Math.floor(Math.random() * 9) > 5) {
      this.setState({
        card1: {
          text: this.props.lie,
          type: "lie",
        },
        card2: {
          text: this.props.truth2,
        },
        card3: {
          text: this.props.truth1,
        },
      });
    } else if (Math.floor(Math.random() * 9) > 2) {
      this.setState({
        card1: {
          text: this.props.truth2,
        },
        card2: {
          text: this.props.lie,
          type: "lie",
        },
        card3: {
          text: this.props.truth1,
        },
      });
    } else {
      this.setState({
        card1: {
          text: this.props.truth1,
        },
        card2: {
          text: this.props.truth2,
        },
        card3: {
          text: this.props.lie,
          type: "lie",
        },
      });
    }
  }
  componentDidMount() {
    this.randomizer();
  }

  componentDidUpdate() {}

  handleClickCard1(e) {
    if (this.state.card1.type === "lie") {
      this.setState({ found: true });
      e.target.style.color = "green";
      e.target.innerText = "lie";
    } else {
      e.target.style.color = "red";
      e.target.innerText = "truth";
    }
  }

  handleClickCard2(e) {
    if (this.state.card2.type === "lie") {
      this.setState({ found: true });
      e.target.style.color = "green";
      e.target.innerText = "lie";
    } else {
      e.target.style.color = "red";
      e.target.innerText = "truth";
    }
  }

  handleClickCard3(e) {
    e.preventDefault();
    if (this.state.card3.type === "lie") {
      this.setState({ found: true });
      e.target.style.color = "green";
      e.target.innerText = "lie";
    } else {
      e.target.style.color = "red";
      e.target.innerText = "truth";
    }
  }

  render() {
    return (
      <div className={styles.TnFCard}>
        <p className={styles.prompt}>Which one is the lie?</p>
        <div>
          <div className={styles.firstTwo}>
            <button onClick={this.handleClickCard1} className={styles.choices}>
              {this.state.card1.text}
            </button>
            <button onClick={this.handleClickCard2} className={styles.choices}>
              {this.state.card2.text}
            </button>
          </div>
          <div>
            <div className={styles.last}>
              <button
                onClick={this.handleClickCard3}
                className={styles.choices}
              >
                {this.state.card3.text}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TruthLiesCard;
