import styles from './Goose.module.scss';
import LoaderGoose from './LoaderGoose/LoaderGoose';
import StartGoose from './StartGoose/StartGoose';

function Goose () {
    return (
        <div className={styles.container}>
            <LoaderGoose/>
            {/* <StartGoose/> */}
        </div>
    );
}

export default Goose;
