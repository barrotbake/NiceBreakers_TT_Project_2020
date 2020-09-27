import React from 'react'
import styles from './create-form.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';




function User_Create_Form() {
    
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
                            <Form.Group controlId="formBasicQuestions">
                                <Form.Label className={styles.form_text}> Pick Your Questions/Mini-Games</Form.Label>
                                <br />
                                <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                                    <br />
                                    <Form.Label className={styles.label}>Select with five questions</Form.Label>
                                    <br />
                                    <br />
                                    {/*  */}
                                    
                                    <select htmlSize={5} className={styles.form_input} multiple>
                                        <br />
                                        <option value={"What is your favorite food?"}>What is your favorite food? </option>
                                        <option value={"What's your favorite genre of music?"}>What's your favorite genre of music?</option>
                                        <option value={"Do you have any hobbies?"}>Do you have any hobbies?</option>
                                        <option value={"What was your dream career as a child?"}>What was your dream career as a child?</option>
                                        <option value={"What is the best gift you've ever been given?"}>What is the best gift you've ever been given?</option>
                                        <option value={"What's your favorite season of the year?"}>What's your favorite season of the year?</option>
                                        <option value={"Do you like hot or cold weather?"}>Do you like hot or cold weather?</option>
                                        <option value={"Are you a morning person or a night person?"}>Are you a morning person or a night person?</option>
                                        <option value={"What was your first job?"}>What was your first job?</option>
                                        <option value={"Where have you traveled?"}>Where have you traveled?</option>
                                        <option value={"What's your go to drink for a caffeine jump?"}>What's your go to drink for a caffeine jump?</option>
                                        <option value={"Never Have I Ever"}>Never Have I Ever</option>
                                        <option value={"Two Truths and A Lie"}>Two Truths and A Lie</option>
                                    </select>
                                </Form.Group>
                                <Form.Text className={styles.text}>Hold down the Ctrl (windows) or Command (Mac) button to select multiple options.</Form.Text>
                            </Form.Group>
                            <br />

                            <br />
                            <Button variant="light" className={styles.button} type="submit" form="makeGame">
                                Next
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </>
    )
}

export default User_Create_Form;