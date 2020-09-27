import styles from "./mainContainer.module.css";

// const createShapeDoodle = (style) => ({
//   top: `${Math.floor(Math.random() * innerHeight)}px`,
//   left: `${Math.floor(Math.random() * innerWidth)}px`,
//   text: Math.random() > 0.5 ? "X" : "O",
//   style,
// });
//
// const rand = (x) => {
//   return `${Math.floor(Math.random() * x)}px`;
// }
//
// class Shape extends React.Component {
//   constructor(props) {
//     super(props)
//     this.ref = React.createRef();
//     this.state = {
//       top: 0,
//       left: 0,
//       opacity: 0,
//     }
//   }
//   componentDidMount() {
//     this.setState({
//       top: rand(innerHeight),
//       left: rand(innerWidth),
//     })
//     this.ref.current.onanimationiteration = () => {
//       console.log("aniomation loops")
//       this.setState({
//         top: rand(innerHeight),
//         left: rand(innerWidth),
//         opacity: 0,
//       })
//     };
//   }
//
//   render() {
//     return (
//       <a ref={this.ref} className={styles.shape} style={{
//         top: this.state.top,
//         left: this.state.left,
//         opacity: this.state.opacity,
//         animationDelay: Math.floor(Math.random() * 10) + "s",
//       }}> {Math.random() > 0.5 ? "X" : "O"} </a>
//     )
//   }
// }

class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      shapes: [],
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     shapes: new Array(2).fill(<Shape />).map((shape, i) => {
  //       return <Shape className={styles.shape} key={i} />
  //     })
  //   });
  // }

  render() {
    return <div className={styles.main}>{this.props.children}</div>;
  }
}

export default MainContainer;
