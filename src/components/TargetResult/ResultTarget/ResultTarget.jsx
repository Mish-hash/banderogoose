import styles from './ResultTarget.module.scss';

function ResultTarget(props) {

    const {img, name} = props.data;
    return(
        <div className={styles.container}>
            <img className={styles.image} src={img} alt={name}/>
            <p>{props.text}</p>
        </div>
    );
}

export default ResultTarget;
