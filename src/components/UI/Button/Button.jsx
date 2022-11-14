import styles from './Button.module.scss';

function Button(props) {

    const classes = `${styles.button} ${props.className}`

    console.log(props);

    return <button className={classes}>{props.children}</button>
}

export default Button;