import React, { useContext } from "react";
import Circle from "../UI/Circle/Circle";
import styles from './StartGoose.module.scss';
import goose from '../img/startGus.webp';
import Button from "../UI/Button/Button";
import { DataContext } from "../../providers/DataProvider";
import { PageContext } from "../../providers/PageProvider";

function StartGoose() {

    const targetsData = useContext(DataContext);
    const { setPage } = useContext(PageContext);

    const welcome = targetsData.welcomeDialogs[Math.floor(Math.random() * ((targetsData.welcomeDialogs.length - 1) - 0 + 1)) + 0];

    const btnClick = () => {
        setPage(targetsData.pages.selectTargetPage)
    }

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
            <Button disabled={false} hendlerClick={btnClick} className={styles.button_start}>Обрати позицію</Button>
        </div>
    );
}

export default StartGoose;
