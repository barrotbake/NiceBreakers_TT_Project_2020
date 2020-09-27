import React from "react";
import styles from "./create-form.module.css";
import Button from "../button/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import * as constants from "../../constants";

function User_Create_Form(props) {
  // TO DO: Connect the select options to a method that creates an array

  // Attempt of a previous method for this, had problems in select tag

  // const func = function handleChange(e) {
  //     var options = e.target.options;
  //     var value = [];
  //     for (var i = 0, l = options.length; i < l; i++) {
  //         if (options[i].selected) {
  //             value.push(options[i].value);
  //             console.log(value);
  //         }
  //     }
  //     this.props.someCallback(value);
  // }

  return (
    <>
      <Card className={styles.form}>
        {/* <Card.Img variant="top" className={styles.image} /> */}
        {/* <div className={styles.divider}></div> */}
        <Card.Body>
          <Card.Text className={styles.form_text}>
            <Form>
              <Form.Label>Don't be shy, choose a game!</Form.Label>
              <div onClick={() => {
                props.socket.emit(constants.START_GAME, {
                  game: constants.TWO_TRUTHS_AND_A_LIE,
                });
              }} className={styles.parent}>
                <a className={styles.child}> {constants.TWO_TRUTHS_AND_A_LIE} </a>
              </div>
              {/* <Button
                className={styles.button}
                text={constants.TWO_TRUTHS_AND_A_LIE}
                onClick={() => {
                  props.socket.emit(constants.START_GAME, {
                    game: constants.TWO_TRUTHS_AND_A_LIE,
                  });
                }}
              /> */}
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default User_Create_Form;
