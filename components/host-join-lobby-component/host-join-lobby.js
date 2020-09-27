import React from 'react'
import styles from './host-join-lobby.module.css'
import Button from "../button/Button";


const Host_Join_Lobby = (props) => {
    return (
        <div className={styles.gen_box}>

            <div className={styles.top_box}>
                <h1 className={styles.top_text}>Player Number</h1>
                <h2 className={styles.top_text}></h2>
                {/* props.children */}
            </div>
            <br/>


            <div className={styles.right_box}>
                <h1 className={styles.right_top_text}>Room Code</h1>
                <h2 className={styles.right_sub_text}>T</h2>
                {/* {props.children} */}
            </div> 
            
            
        </div>
    )
}

export default Host_Join_Lobby;