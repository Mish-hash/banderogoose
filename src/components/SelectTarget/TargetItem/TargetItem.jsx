import styles from './TargetItem.module.scss';

function TargetItem(props) {

    const { icon, name, text } = props.data;

    const classes = `${styles.image}`
    return(
        <div className={styles.container} onClick={props.hendlerClick}>
            <img className={`${styles.image} ${(props.selected && styles.selected)}`} src={icon} alt={name}/>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default TargetItem;
