import React from 'react'
import styles from './user-join-lobby.module.css'
import Button from "../button/Button";
import Card from 'react-bootstrap/Card'


function User_Join_Lobby() {
    return (
        <>
            <Card className={styles.box_css}>
                <Card.Body>
                    <Card.Text className={styles.header_text}>
                        Waiting for host to start the game...
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </>
    )
}

export default User_Join_Lobby;