import { useContext } from 'react';
import styles from './Goose.module.scss';
import SelectTarget from './SelectTarget/SelectTarget';
import TargetResult from './TargetResult/TargetResult';
import { PageContext } from '../providers/PageProvider';
import { DataContext } from '../providers/DataProvider';
import StartPage from './StartPage/StartPage';

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
        default:
            curentPage= <h3>Error</h3>
    }


    return (
        <div className={styles.container}>
            {curentPage}
        </div>
    );
}

export default Goose;
