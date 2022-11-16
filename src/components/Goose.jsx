import { useContext } from 'react';
import styles from './Goose.module.scss';
import SelectTarget from './SelectTarget/SelectTarget';
import TargetResult from './TargetResult/TargetResult';
import { PageContext } from '../providers/PageProvider';
import { DataContext } from '../providers/DataProvider';
import StartPage from './StartPage/StartPage';
import HistoryPage from './HistoryPage/HistoryPage';

function Goose () {

    const { page } = useContext(PageContext);
    const { pages } = useContext(DataContext);

    let curentPage = '';

    switch(page) {
        case pages.startPage:
            curentPage = <StartPage/>;
            break;
        case pages.selectTargetPage:
            curentPage = <SelectTarget/>;
            break;
        case pages.targetResultPage:
            curentPage = <TargetResult/>;
            break;
        case pages.historyPage:
            curentPage = <HistoryPage/>;
            break;
        default:
            curentPage= <h1>Error. Component not found!!!</h1>
    }


    return (
        <div className={styles.container}>
            {curentPage}
        </div>
    );
}

export default Goose;
