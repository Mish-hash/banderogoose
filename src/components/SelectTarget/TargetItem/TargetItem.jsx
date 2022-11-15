import styles from './TargetItem.module.scss';

function TargetItem(props) {

    const { icon, name, text } = props.data;
    return(
        <div className={styles.container}>
            <img className={styles.image} src={icon} alt={name}/>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default TargetItem;
