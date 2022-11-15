import styles from './Button.module.scss';

function Button(props) {

    const classes = `${styles.button} ${props.className}`

    return <button onClick={props.hendlerClick} className={classes}>{props.children}</button>
}

export default Button;