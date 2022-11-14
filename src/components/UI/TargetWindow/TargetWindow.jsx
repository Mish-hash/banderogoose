import styles from './TargetWindow.module.scss';
import closeIcon from '../../img/close.webp';
import Button from '../Button/Button';

function TargetWindow(props) {

    const { headerText, descriptionText, buttonText } = props;
    console.log(props);

    return(
        <div className={styles.container}>
            <div className={styles.close}><img src={closeIcon} alt="close-icon" /></div>
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
