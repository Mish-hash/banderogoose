import React from 'react';
import styles from './LoaderGus.module.scss';
import gus from '../img/gus.png';

function LoaderGus(props) {
    return(
        <React.Fragment>
            <div className={styles.firstElipse}>
                <div className={styles.secondElipse}>
                    <div className={styles.thirdElipse}>
                    </div>
                </div>
            </div>
            <div className={styles.bird}>
                <img src={gus} className={styles.img_gus} alt="gus" />
                <div className={styles.text}>
                    <p>Бандерогусь — <br/> за сраку орків кусь</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LoaderGus;
