import {selectTargetData} from '../../data/data';
import TargetItem from './TargetItem/TargetItem';
import TargetWindow from '../UI/TargetWindow/TargetWindow';

function SelectTarget() {

    const targets = selectTargetData.targets.map(el => (
        <TargetItem key={`${el.name}_${el.id.toString()}`} data={el}/>
    ));

    return(
        <TargetWindow
            headerText={selectTargetData.headerText}
            descriptionText={selectTargetData.descriptionText}
            buttonText={selectTargetData.button}
        >
            {targets}
        </TargetWindow>
    );
}

export default SelectTarget;
