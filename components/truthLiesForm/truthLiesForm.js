import styles from "./truthLiesForm.module.css";
import Button from "../button/Button";
import { route } from "next/dist/next-server/server/router";
import TruthLiesCard from "../truthLiesCard/truthLiesCard";
import { SUBMIT_FORM } from "../../constants";

class TruthLiesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      truth1: "Say something true about you...",
      truth2: "Say something true about you...",
      lie: "Give a lie about yourself...",
      submitted: false
    };

    this.handleTruth1Change = this.handleTruth1Change.bind(this);
    this.handleTruth2Change = this.handleTruth2Change.bind(this);
    this.handleLieChange = this.handleLieChange.bind(this);
    this.submitForm = this.submitForm.bind(this)
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

  submitForm(){
    this.setState({submitted:true})
  }

  doneSubmitting(){
    return(
      <TruthLiesCard
      truth1={this.state.truth1}
      truth2={this.state.truth2}
      lie={this.state.lie}
      />
    )
  }

  fillingOutForm(){
    return(
      <div>
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
          <Button text="submit" 
          className={styles.submitButton} 
          onClick={this.submitForm()}/>
        </div>
      </div>
    )
  }
  
  render() {
    let sub_stat = this.state.submitted
    console.log(sub_stat)
    return (
      <div className={styles.container}>
        {!sub_stat ?  this.doneSubmitting() : this.fillingOutForm()}
      </div>
    );
  }
}

export default TruthLiesForm;
