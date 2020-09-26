import React from 'react'
import styles from './user-form.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


function User_Join_Form() {
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
                                <Form.Control className={styles.form_group} type="name" placeholder="Enter name" />
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicPronouns">
                                <Form.Label>Pronouns</Form.Label>
                                <Form.Control className={styles.form_group} type="pronouns" placeholder="Pronouns" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPronounciation">
                                <Form.Label>Pronounciation</Form.Label>
                                <Form.Control className={styles.form_group} type="pronounciation" placeholder="Pronounciation" />
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicRoomCode">
                                <Form.Label>Room Code</Form.Label>
                                <Form.Control className={styles.form_group} type="roomcode" placeholder="Room Code" />
                            </Form.Group>

                            <Button variant="light" className={styles.button}  type="submit">
                                Start
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </>
    )
}

export default User_Join_Form;