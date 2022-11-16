import { useContext } from 'react';
import { DataContext } from '../../providers/DataProvider';
import { HistoryContext } from '../../providers/HistoryProvider';
import { PageContext } from '../../providers/PageProvider';
import { TargetContext } from '../../providers/TargetPrivider';
import TargetWindow from '../UI/TargetWindow/TargetWindow';
import ResultTarget from './ResultTarget/ResultTarget';

function TargetResult() {

    const targetsData = useContext(DataContext);
    const {targetId, setTargetId} = useContext(TargetContext);
    const {history} = useContext(HistoryContext);
    const { setPage } = useContext(PageContext);

    const { headerText, descriptionText, button, text } = targetsData.targetResult;
    const { targets } = targetsData;

    const resultTarget = targets.filter(el => el.id === targetId)
        .map(el => <ResultTarget data={el} text={text} key={`${el.name}${el.id}`}/>);

    const hendlerBtnClick = () => {
        setPage(targetsData.pages.historyPage);
        setTargetId(null);
    }

    return(
        <TargetWindow
            headerText={headerText}
            descriptionText={descriptionText}
            buttonText={button}
            btnClick={hendlerBtnClick}
        >
            {resultTarget}
        </TargetWindow>
    );
}

export default TargetResult;
