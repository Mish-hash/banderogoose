import { useContext } from 'react';
import { DataContext } from '../../../providers/DataProvider';
import styles from './HistoryItem.module.scss';

function HistoryItem({el}) {
    const targetsData = useContext(DataContext);

    const tagret = targetsData.targets
        .filter(terget => terget.id === el.targetId);

    const label = tagret.map(el => el.text);
    const image = tagret.map(el => el.imgWar);

    console.log(image);

    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.date}>
                    <p>{el.time}</p>
                    <p>{el.date}</p>
                </div>
                <p className={styles.label}>{label}</p>
            </div>
            <div className={styles.icon}>
                <img src={image} alt={el.time}/>
            </div>
        </div>
    );
}

export default HistoryItem;
