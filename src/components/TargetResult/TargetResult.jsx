import TargetWindow from '../UI/TargetWindow/TargetWindow';
import { targetsData } from '../../data/data';
import ResultTarget from './ResultTarget/ResultTarget';

function TargetResult() {

    const { headerText, descriptionText, button, text } = targetsData.targetResult;
    const { targets } = targetsData;

    const id = 4;

    const resultTarget = targets.filter(el => el.id === id)
        .map(el => <ResultTarget data={el} text={text} key={`${el.name}${el.id}`}/>);

    return(
        <TargetWindow
            headerText={headerText}
            descriptionText={descriptionText}
            buttonText={button}
        >
            {resultTarget}
        </TargetWindow>
    );
}

export default TargetResult;
