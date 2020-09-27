import styles from "./mainContainer.module.css";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgShapes: [],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        bgShapes: [
          ...this.state.bgShapes.slice(1),
          {
            top: `${Math.floor(Math.random() * innerHeight)}px`,
            left: `${Math.floor(Math.random() * innerWidth)}px`,
            style: styles.shape,
            text: Math.random() > 0.5 ? "X" : "O",
          },
        ],
      });
    }, 1000);
  }

  render() {
    return (
      <div className={styles.main}>
        {this.props.children}
        {this.state.bgShapes.map(({ top, left, style, text }) => {
          return (
            <a className={style} style={{ top, left }}>
              {text}
            </a>
          );
        })}
      </div>
    );
  }
}

export default MainContainer;
