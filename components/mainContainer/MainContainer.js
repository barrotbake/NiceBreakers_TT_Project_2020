import styles from "./mainContainer.module.css";

// const BGShape = () => {
//   const pos = {
//     top: Math.floor(Math.random() * window.innerHeight) + "px",
//     left: Math.floor(Math.random() * window.innerWidth) + "px"
//   }
//   return (
//     <a className={styles.shape} style={pos}> {Math.random() > 0.5 ? "X" : "O"} </a>
//   )
// }

class BGShape extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      top: 50,
      left: 50,
      style: styles.shape,
    }
  }
  render() {
    return (
      <a className={this.state.style} style={{top: this.state.top, left: this.state.left}}> {Math.random() > 0.5 ? "X" : "O"} </a>
    )
  }
}

class MainContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      bgShapes: [],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({bgShapes: [...this.state.bgShapes.slice(1), new BGShape()]})
    }, 1000)
  }

  render() {
    return (
    <div className={styles.main}>
      {this.props.children}
      {this.state.bgShapes}
    </div>
    );
  }
};

export default MainContainer;
