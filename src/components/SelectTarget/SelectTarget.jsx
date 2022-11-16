import TargetItem from './TargetItem/TargetItem';
import TargetWindow from '../UI/TargetWindow/TargetWindow';
import { useContext, useState } from 'react';
import { DataContext } from '../../providers/DataProvider';

function SelectTarget() {

    const targetsData = useContext(DataContext);
    const [targetId, setTargetId] = useState(null);

    const { headerText, descriptionText, button } = targetsData.selectTarget;
    const { targets } = targetsData;

    const hendlerTrgetClick = (id) => {
        setTargetId(id);
    };
    const hendlerBtnClick = () => {
        console.log(targetId);
    }

    const targetsItems = targets.map(el => (
        <TargetItem
            key={`${el.name}_${el.id.toString()}`}
            data={el}
            selected={(el.id === targetId) ? true : false}
            hendlerClick={()=>{hendlerTrgetClick(el.id)}}
        />
    ));

    return(
        <TargetWindow
            headerText={headerText}
            descriptionText={descriptionText}
            buttonText={button}
            btnDisable={(targetId === null) ? true : false}
            btnClick={hendlerBtnClick}
        >
            {targetsItems}
        </TargetWindow>
    );
}

export default SelectTarget;
