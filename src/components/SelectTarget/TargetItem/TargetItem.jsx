import styles from './TargetItem.module.scss';

function TargetItem(props) {

    const { img, name, text } = props.data;
    return(
        <div className={styles.container}>
            <img className={styles.image} src={img} alt={name}/>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default TargetItem;
