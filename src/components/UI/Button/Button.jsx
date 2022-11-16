import styles from './Button.module.scss';

function Button(props) {

    const { disabled = false } = props;

    const classes = `${styles.button} ${props.className} ${disabled && styles.disabled}`

    return <button disabled={disabled} onClick={props.hendlerClick} className={classes}>{props.children}</button>
}

export default Button;