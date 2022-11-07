import styles from './Goose.module.scss';
import LoaderGus from './LoaderGus/LoaderGus';

function Goose () {
    return (
        <div className={styles.container}>
            <LoaderGus/>
        </div>
    );
}

export default Goose;
