import styles from './TargetWindow.module.scss';
import closeIcon from '../../img/close.webp';
import Button from '../Button/Button';
import { useContext } from 'react';
import { PageContext } from '../../../providers/PageProvider';
import { DataContext } from '../../../providers/DataProvider';

function TargetWindow(props) {

    const { pages } = useContext(DataContext);
    const { setPage } = useContext(PageContext);

    const { headerText, descriptionText, buttonText } = props;

    const onCloseClick = () => {
        setPage(pages.startPage)
    };

    return(
        <div className={styles.container}>
            <div className={styles.close}><img src={closeIcon} alt="close-icon" onClick={onCloseClick}/></div>
            <div className={styles.header}><p>{headerText}</p></div>
            <div className={styles.description}><p>{descriptionText}</p></div>
            <div className={styles.targets}>
                {props.children}
            </div>
            <Button className={styles.button}>{buttonText}</Button>
        </div>
    );
}

export default TargetWindow;
