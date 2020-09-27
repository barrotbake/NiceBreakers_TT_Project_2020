import styles from "./truthLiesForm.module.css";
import Button from "../button/Button";
import { route } from "next/dist/next-server/server/router";
import TruthLiesCard from "../truthLiesCard/truthLiesCard";
import { SUBMIT_FORM } from "../../constants";
import { useState } from "react";


const FillingOutForm = (props) =>{
  const [truth1, setTruth1] = useState("Say something true about you...");
const [truth2, setTruth2] = useState("Say something true about you...");
const [lie, setLie] = useState("Give a lie about yourself...");
  console.log(props.submited)
  return(
  <div>
  <form className={styles.form}>
      <input
        className={styles.textInput}
        type="text"
        value={props.truth1}
        onChange={(e)=>{
          setTruth1(e.target.value)
        }}
      />
      <input
        className={styles.textInput}
        type="text"
        value={props.truth2}
        onChange={(e)=>{
          setTruth2(e.target.value)
        }}
      />
      <input
        className={styles.textInput}
        type="text"
        value={props.lie}
        onChange={(e)=>{
          setLie(e.target.value)
        }}
      />
</form>
<div className={styles.buttonContainer}>
  <Button text="submit" 
  className={styles.submitButton} 
  onClick={this.submitForm()}/>
</div>
</div>)
}

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
    console.log(this.state.submitted)
    return(
      <TruthLiesCard
      truth1={this.state.truth1}
      truth2={this.state.truth2}
      lie={this.state.lie}
      submitted={this.state.submitted}
      />
    )
  }
  

  render() {
    console.log(this.state.submitted)
    let current = (
      current = <FillingOutForm
      truth1={this.state.truth1}
      truth2={this.state.truth2}
      lie={this.state.lie}
    />
    )
    if(this.state.submitted){
      current = this.doneSubmitting()
    }

    return (
      <div className={styles.container}>
        {current}
      </div>
    );
  }
}

export default TruthLiesForm;
