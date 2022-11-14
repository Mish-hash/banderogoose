import styles from './SelectTarget.module.scss';
import {selectTargetData} from '../../data/data';
import closeIcon from '../img/close.webp';
import TargetItem from './TargetItem/TargetItem';
import Button from '../UI/Button/Button';

function SelectTarget() {

    const targets = selectTargetData.targets.map(el => (
        <TargetItem key={`${el.name}_${el.id.toString()}`} data={el}/>
    ));

    return(
        <div className={styles.container}>
            <div className={styles.close}><img src={closeIcon} alt="close-icon" /></div>
            <div className={styles.header}><p>{selectTargetData.headerText}</p></div>
            <div className={styles.description}><p>{selectTargetData.descriptionText}</p></div>
            <div className={styles.targets}>
                {targets}
            </div>
            <Button className={styles.button}>{selectTargetData.button}</Button>
        </div>
    );
}

export default SelectTarget;
