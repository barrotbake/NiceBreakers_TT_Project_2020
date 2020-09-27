import styles from "./truthLiesForm.module.css";
import Button from "../button/Button";

class TruthLiesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      truth1: "Say something true about you...",
      truth2: "Say something true about you...",
      lie: "Give a lie about yourself...",
    };
    this.handleTruth1Change = this.handleTruth1Change.bind(this);
    this.handleTruth2Change = this.handleTruth2Change.bind(this);
    this.handleLieChange = this.handleLieChange.bind(this);
  }
  handleTruth1Change(e) {
    this.setState({ truth1: e.target.value });
  }
  handleTruth2Change(e) {
    this.setState({ truth2: e.target.value });
  }
  handleLieChange(e) {
    this.setState({ lie: e.target.value });
  }

  render() {
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <input
            className={styles.textInput}
            type="text"
            value={this.state.truth1}
            onChange={this.handleTruth1Change}
          />
          <input
            className={styles.textInput}
            type="text"
            value={this.state.truth2}
            onChange={this.handleTruth2Change}
          />
          <input
            className={styles.textInput}
            type="text"
            value={this.state.lie}
            onChange={this.handleLieChange}
          />
        </form>
        <div className={styles.buttonContainer}>
          <Button text="submit" className={styles.submitButton} />
        </div>
      </div>
    );
  }
}

export default TruthLiesForm;
