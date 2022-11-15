import { useState } from "react";
import LoaderGoose from "../LoaderGoose/LoaderGoose";
import StartGoose from "../StartGoose/StartGoose";

function StartPage() {
    const [isLoad, setIsLoad] = useState(true);
    setTimeout(()=>{setIsLoad(false)}, 1500);

    return <>{isLoad ? <LoaderGoose/> : <StartGoose/>}</>;
};

export default StartPage;
