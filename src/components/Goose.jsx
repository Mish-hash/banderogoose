import { useState } from 'react';
import styles from './Goose.module.scss';
import LoaderGoose from './LoaderGoose/LoaderGoose';
import StartGoose from './StartGoose/StartGoose';

function Goose () {
    const [isLoad, setIsLoad] = useState(true);

    setTimeout(()=>{setIsLoad(false)}, 1500)


    return (
        <div className={styles.container}>
            {isLoad ? <LoaderGoose/> : <StartGoose/>}
        </div>
    );
}

export default Goose;
