import styles from './Goose.module.scss';
import WelcomeGus from './WelcomeGus/WelcomeGus';

function Goose () {
    return (
        <div className={styles.container}>
            <WelcomeGus/>
        </div>
    );
}

export default Goose;
