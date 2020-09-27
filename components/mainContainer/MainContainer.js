import styles from "./mainContainer.module.css";

// const createShapeDoodle = (style) => ({
//   top: `${Math.floor(Math.random() * innerHeight)}px`,
//   left: `${Math.floor(Math.random() * innerWidth)}px`,
//   text: Math.random() > 0.5 ? "X" : "O",
//   style,
// });

class MainContainer extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   bgShapes: [],
    // };
  }

  // componentDidMount() {
  //   this.setState({
  //     bgShapes: new Array(10)
  //       .fill({})
  //       .map(() => createShapeDoodle(styles.shape)),
  //   });
  //   setInterval(() => {
  //     this.setState(({ bgShapes }) => {
  //       if (bgShapes[1] !== undefined) {
  //         bgShapes[1].style = [styles.shape, styles.hide];
  //       }
  //       return {
  //         bgShapes: [
  //           ...this.state.bgShapes.slice(1),
  //           createShapeDoodle(styles.shape),
  //         ],
  //       };
  //     });
  //   }, 1000);
  // }

  render() {
    return (
      <div className={styles.main}>
        {this.props.children}
        {/* {this.state.bgShapes.map(({ top, left, style, text }) => {
          return (
            <a className={style} style={{ top, left }}>
              {text}
            </a>
          );
        })} */}
      </div>
    );
  }
}

export default MainContainer;
