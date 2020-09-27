import styles from './flexCard.module.css'

const FlexCard = (props) => {
    return(
        <div className={styles.flexCard}>
            {props.children}
        </div>
    )
}

export default FlexCard;