import styles from './button.module.css'

let Button = (props) => {
  return(
    <div className={styles.parent}>
      <a className={styles.child}> {props.text} </a>
    </div>
  )
}

export default Button;
