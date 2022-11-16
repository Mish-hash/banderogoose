import React, { useState } from 'react';

export const TargetContext = React.createContext();

export const TargetProvider = (props) => {
    const [targetId, setTargetId] = useState(null)
    return(
        <TargetContext.Provider value={{targetId, setTargetId}}>
            { props.children }
        </TargetContext.Provider>
    );
}
