import TargetWindow from '../UI/TargetWindow/TargetWindow';
import { targetResultData } from '../../data/data';
import ResultTarget from './ResultTarget/ResultTarget';

function TargetResult() {

    const id = 4;

    const resultTarget = targetResultData.targets.filter(el => el.id === id)
        .map(el => <ResultTarget data={el} text={targetResultData.text}/>);

    return(
        <TargetWindow
            headerText={targetResultData.headerText}
            descriptionText={targetResultData.descriptionText}
            buttonText={targetResultData.button}
        >
            {resultTarget}
        </TargetWindow>
    );
}

export default TargetResult;
