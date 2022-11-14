import { useState } from 'react';
import styles from './Goose.module.scss';
import LoaderGoose from './LoaderGoose/LoaderGoose';
import StartGoose from './StartGoose/StartGoose';
import SelectTarget from './SelectTarget/SelectTarget';

function Goose () {
    const [isLoad, setIsLoad] = useState(true);

    setTimeout(()=>{setIsLoad(false)}, 1500)


    return (
        <div className={styles.container}>
            {/* {isLoad ? <LoaderGoose/> : <StartGoose/>} */}
            <SelectTarget/>
        </div>
    );
}

export default Goose;
