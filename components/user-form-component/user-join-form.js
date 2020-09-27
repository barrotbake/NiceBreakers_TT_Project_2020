import React, { useState } from "react";
import styles from "./user-form.module.css";
import Button from "../button/Button.js";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import * as constants from "../../constants";
import SweetAlert from "sweetalert2";

function User_Join_Form(props) {
  const [name, setName] = useState("");
  const [pronoun, setPronoun] = useState("");
  const [pronunciation, setPronunciation] = useState("");
  return (
    <>
      <Card className={styles.form}>
        {/* <Card.Img variant="top" className={styles.image} /> */}
        {/* <div className={styles.divider}></div> */}
        <Card.Body>
          <Card.Text className={styles.form_text}>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <br />
                <Form.Control
                  className={styles.form_input}
                  type="name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </Form.Group>
              <br />
              <br />
              <Form.Group controlId="formBasicPronouns">
                <Form.Label>Pronouns</Form.Label>
                <br />
                <Form.Control
                  className={styles.form_input}
                  type="pronouns"
                  onChange={(event) => {
                    setPronoun(event.target.value);
                  }}
                />
              </Form.Group>
              <br />
              <br />
              <Form.Group controlId="formBasicPronounciation">
                <Form.Label>Pronounciation</Form.Label>
                <br />
                <Form.Control
                  className={styles.form_input}
                  type="pronounciation"
                  onChange={(event) => {
                    setPronunciation(event.target.value);
                  }}
                />
              </Form.Group>
              <br />

              <Button
                text="Join"
                className={styles.button}
                onClick={async () => {
                  console.log("user-form", props.socket);
                  for (const [fieldName, value] of Object.entries({
                    name,
                    pronoun,
                    pronunciation,
                  })) {
                    if (value.length === 0) {
                      return await SweetAlert.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `Field '${fieldName}' cannot be empty.`,
                      });
                    }
                  }
                  props.socket.emit(constants.SUBMIT_FORM, {
                    name,
                    pronoun,
                  });
                }}
              />
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default User_Join_Form;
