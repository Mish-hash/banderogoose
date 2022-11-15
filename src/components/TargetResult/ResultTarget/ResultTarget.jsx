import styles from './ResultTarget.module.scss';

function ResultTarget(props) {

    const {imgWar, name} = props.data;
    return(
        <div className={styles.container}>
            <img className={styles.image} src={imgWar} alt={name}/>
            <p>{props.text}</p>
        </div>
    );
}

export default ResultTarget;
