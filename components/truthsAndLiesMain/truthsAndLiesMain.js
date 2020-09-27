import styles from './truthsAndLiesMain.module.css'
import TruthsLiesForm from '../truthLiesForm/truthLiesForm'

const TruthsAndLiesMain = () => {
    return (
        <div className={styles.page}>
            <div className={styles.row}>
                <TruthsLiesForm/>
            </div>
        </div>
    )
}

export default TruthsAndLiesMain 