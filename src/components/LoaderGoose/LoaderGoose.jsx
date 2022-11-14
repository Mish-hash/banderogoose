import React from 'react';
import styles from './LoaderGoose.module.scss';
import goose from '../img/gus.webp';
import Circle from '../UI/Circle/Circle';

function LoaderGoose(props) {

    return(
        <div className={styles.container}>
            <Circle/>
            <div className={styles.bird}>
                <img src={goose} className={styles.img_gus} alt="gus" />
                <div className={styles.text}>
                    <p>Бандерогусь — <br/> за сраку орків кусь</p>
                </div>
            </div>
        </div>
    );
}

export default LoaderGoose;
