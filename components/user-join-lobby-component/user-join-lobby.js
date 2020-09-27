import React from 'react'
import styles from './user-join-lobby.module.css'


function User_Join_Lobby(props) {
    return (
        <>
            <div className={styles.box_css}>
                <div className={styles.textContainer}>
                    Waiting for {props.event} game...
                </div>
            </div>
        </>
    )
}

export default User_Join_Lobby;