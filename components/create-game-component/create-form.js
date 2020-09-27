import React from "react";
import styles from "./create-form.module.css";
import Button from "../button/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import * as constants from "../../constants";

function User_Create_Form(props) {
  return (
    <>
      <Card className={styles.form}>
        <Card.Body>
          <Card.Text>
            <Form>
<<<<<<< HEAD
              <Form.Label>Don't be shy, choose a game!</Form.Label>
              <div onClick={() => {
                props.socket.emit(constants.START_GAME, {
                  game: constants.TWO_TRUTHS_AND_A_LIE,
                });
              }} className={styles.parent}>
                <a className={styles.child}> {constants.TWO_TRUTHS_AND_A_LIE} </a>
              </div>
=======
              <Form.Label className={styles.form_text}>
                Don't be shy, choose a game!
              </Form.Label>
              <Button
                className={styles.button}
                text={constants.TWO_TRUTHS_AND_A_LIE}
                onClick={() => {
                  props.socket.emit(constants.START_GAME, {
                    game: constants.TWO_TRUTHS_AND_A_LIE,
                  });
                }}
              />
>>>>>>> 2d8242279f2f4cb0e872188717a8342332164039
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
