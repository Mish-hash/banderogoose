import TargetItem from './TargetItem/TargetItem';
import TargetWindow from '../UI/TargetWindow/TargetWindow';
import { useContext } from 'react';
import { DataContext } from '../../providers/DataProvider';

function SelectTarget() {

    const targetsData = useContext(DataContext);

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
