import React from 'react';
import styles from './WelcomeGus.module.scss';
import gus from '../img/gus.png';

function WelcomeGus(props) {
    return(
        <React.Fragment>
            <div className={styles.firstElipse}>
                <div className={styles.secondElipse}>
                    <div className={styles.thirdElipse}>
                    </div>
                </div>
            </div>
            <div className={styles.bird}>
                <img src={gus} alt="gus" />
                <div className={styles.text}>
                    <p>Бандерогусь — <br/> за сраку орків кусь</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default WelcomeGus;
