import { useContext } from 'react';
import { DataContext } from '../../providers/DataProvider';
import { HistoryContext } from '../../providers/HistoryProvider';
import { PageContext } from '../../providers/PageProvider';
import Button from '../UI/Button/Button';
import HistoryItem from './HistoryItem/HistoryItem';
import styles from './HistoryPage.module.scss';

function HistoryPage() {

    const targetsData = useContext(DataContext);
    const {setPage} = useContext(PageContext);
    const {history} = useContext(HistoryContext);

    const {headerText, button} = targetsData.historyPage;

    const btnClick = () => {
        setPage(targetsData.pages.selectTargetPage)
    }

    return(
        <div className={styles.container}>
            <p className={styles.text}>{headerText}</p>
            <div className={styles.list}>
                {history.map(el => <HistoryItem el={el} key={`history_${el.id}`}/>)}
            </div>
            <Button hendlerClick={btnClick} className={styles.button}>{button}</Button>
        </div>
    );
}

export default HistoryPage;
