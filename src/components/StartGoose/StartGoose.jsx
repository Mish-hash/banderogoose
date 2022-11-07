import React from "react";
import Circle from "../UI/Circle";
import styles from './StartGoose.module.scss';
import goose from '../img/startGus.webp';

function StartGoose() {

    const arrText = [
        'Усі системи мегаактивовані. Очікую на команду!',
        'Готовий фарширувати!',
        'У запасі є ракети – з орків смажити котлети',
    ];

    const random = Math.floor(Math.random() * ((arrText.length - 1) - 0 + 1)) + 0;

    //const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


    return(
        <React.Fragment>
            <Circle/>
            <div className={styles.bird}>
                <img src={goose} className={styles.img_gus} alt="gus" />
                <div className={styles.text}>
                    <p>{arrText[random]}</p>
                </div>
                <div className={styles.welcome}>
                    <p>Бойовий гусак із біолабораторій України готовий нанести «свєрх-трататата»по ворожим об’єктам</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default StartGoose;
