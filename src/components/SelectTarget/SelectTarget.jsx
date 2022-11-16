import TargetItem from './TargetItem/TargetItem';
import TargetWindow from '../UI/TargetWindow/TargetWindow';
import { useContext } from 'react';
import { DataContext } from '../../providers/DataProvider';
import { TargetContext } from '../../providers/TargetPrivider';
import { PageContext } from '../../providers/PageProvider';

function SelectTarget() {

    const targetsData = useContext(DataContext);
    const {targetId, setTargetId} = useContext(TargetContext);
    const {setPage} = useContext(PageContext);

    const { headerText, descriptionText, button } = targetsData.selectTarget;
    const { targets } = targetsData;

    const hendlerTrgetClick = (id) => {
        setTargetId(id);
    };
    const hendlerBtnClick = () => {
        setPage(targetsData.pages.targetResultPage);
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
