import { targetsData } from '../../data/data';
import TargetItem from './TargetItem/TargetItem';
import TargetWindow from '../UI/TargetWindow/TargetWindow';

function SelectTarget() {

    const { headerText, descriptionText, button } = targetsData.selectTarget;
    const { targets } = targetsData;

    const targetsItems = targets.map(el => (
        <TargetItem key={`${el.name}_${el.id.toString()}`} data={el}/>
    ));

    return(
        <TargetWindow
            headerText={headerText}
            descriptionText={descriptionText}
            buttonText={button}
        >
            {targetsItems}
        </TargetWindow>
    );
}

export default SelectTarget;
