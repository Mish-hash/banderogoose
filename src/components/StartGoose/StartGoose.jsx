import React from "react";
import Circle from "../UI/Circle";
import styles from './StartGoose.module.scss';
import goose from '../img/startGus.webp';
import { welcomeDialogTexts } from '../../data/data';

function StartGoose() {

    const welcome = welcomeDialogTexts[Math.floor(Math.random() * ((welcomeDialogTexts.length - 1) - 0 + 1)) + 0];

    return(
        <div className={styles.container}>
            <Circle/>
            <div className={styles.welcome}>
                <p>Бойовий гусак із біолабораторій України готовий нанести «свєрх-трататата»по ворожим об’єктам</p>
            </div>
            <div className={styles.bird}>
                <img src={goose} className={styles.img_gus} alt="gus" />
                <div className={styles.text}>
                    <p>{welcome}</p>
                </div>
            </div>
            <button className={styles.button_start}>Обрати позицію</button>
            
        </div>
    );
}

export default StartGoose;
