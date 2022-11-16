import TargetItem from './TargetItem/TargetItem';
import TargetWindow from '../UI/TargetWindow/TargetWindow';
import React, { useContext, useState } from 'react';
import { DataContext } from '../../providers/DataProvider';
import { TargetContext } from '../../providers/TargetPrivider';
import { PageContext } from '../../providers/PageProvider';
import gus_fly from '../img/gus_fly.webp';
import styles from './SelectTarget.module.scss';

function SelectTarget() {

    const targetsData = useContext(DataContext);
    const {targetId, setTargetId} = useContext(TargetContext);
    const {setPage} = useContext(PageContext);
    const [boom, setBoom] = useState(false);

    const { headerText, descriptionText, button } = targetsData.selectTarget;
    const { targets } = targetsData;

    const hendlerTrgetClick = (id) => {
        setTargetId(id);
    };
    const hendlerBtnClick = () => {
        setBoom(true);
        setTimeout(()=>{
            setPage(targetsData.pages.targetResultPage);
        }, 1300);
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
        <React.Fragment>
            <TargetWindow
                headerText={headerText}
                descriptionText={descriptionText}
                buttonText={button}
                btnDisable={(targetId === null) ? true : false}
                btnClick={hendlerBtnClick}
            >
                {targetsItems}
            </TargetWindow>
            <img className={`${styles.image} ${boom && styles.boom}`} src={gus_fly} alt="gus_fly"/>
        </React.Fragment>
    );
}

export default SelectTarget;
