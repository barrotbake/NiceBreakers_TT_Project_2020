import styles from './truthLiesCard.module.css'
import Button from '../button/Button'

const TruthLiesCard = (props) => {
    return(
        <div className = {styles.TnFCard}>
            <p>Which one is the lie?</p>
            <Button classname = {styles.choices} text = {props.truth1} />
            <Button classname = {styles.choices} text = {props.lie}/>
            <Button classname = {styles.choices} text = {props.truth2}/>
        </div>
    )
}

export default TruthLiesCard;