import React from 'react'
import styles from './create-form.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function User_Create_Form() {
    return (
        <>
            <Card className={styles.form}>
                {/* <Card.Img variant="top" className={styles.image} /> */}
                {/* <div className={styles.divider}></div> */}
                <Card.Body>
                    <Card.Text className={styles.form_text}>
                        <Form>
                            <Form.Group controlId="formBasicQuestions">
                                <Form.Label className={styles.form_text}>Choose Questions</Form.Label>
                                <br />
                                <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                                    <br />
                                    <Form.Label>Select with five questions</Form.Label>
                                    <br />
                                    <Form.Control as="select" htmlSize={5} custom className={styles.form_input}> 
                                        <br />
                                        <option value="What is your favorite food?">What is your favorite food? </option>
                                        <option value="What's your favorite genre of music?" >What's your favorite genre of music?</option>
                                        <option value="Do you have any hobbies?" >Do you have any hobbies?</option>
                                        <option value="What was your dream career as a child?">What was your dream career as a child?</option>
                                        <option value="What is the best gift you've ever been given?">What is the best gift you've ever been given?</option>
                                        <option value="What's your favorite season of the year?">What's your favorite season of the year?</option>
                                        <option value="">Do you like hot or cold weather?</option>
                                        <option value="Are you a morning person or a night person?">Are you a morning person or a night person?</option>
                                        <option value="What was your first job?">What was your first job?</option>
                                        <option value="Where have you traveled?">Where have you traveled?</option>
                                        <option value="What's your go to drink for a caffeine jump?">What's your go to drink for a caffeine jump?</option>

                                    </Form.Control>
                                </Form.Group>
                            </Form.Group>
                            <br />
                            {/* <Form.Group controlId="formBasicPronouns">
                                <Form.Label>Pronouns</Form.Label>
                                <br/>
                                <Form.Control className={styles.form_input} type="pronouns" />
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="formBasicPronounciation">
                                <Form.Label>Pronounciation</Form.Label>
                                <br/>
                                <Form.Control className={styles.form_input} type="pronounciation" />
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="formBasicRoomCode">
                                <Form.Label>Room Code</Form.Label>
                                <br/>
                                <Form.Control className={styles.form_input} type="roomcode" />
                            </Form.Group> */}
                            <br />
                            <Button variant="light" className={styles.button} type="submit">
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