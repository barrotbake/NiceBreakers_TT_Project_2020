import styles from "./timer.module.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_time: 90,
    };
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState(({ current_time }) => ({
        current_time: current_time - 1,
      }));
    }, 1000);
  }

  render() {
    if (this.state.current_time === 0) {
      clearInterval(this.myInterval);
    }
    return (
      <div className={styles.timer}>
        <div className={styles.time}>{this.state.current_time}</div>
      </div>
    );
  }
}

export default Timer;
