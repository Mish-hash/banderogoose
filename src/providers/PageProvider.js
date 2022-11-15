import React, { createContext, useState } from 'react';
import { targetsData } from '../data/data';

export const PageContext = createContext();

export const PageProvider = props => {
    const [page, setPage] = useState(targetsData.pages.startPage);
    return(
        <PageContext.Provider value={{page, setPage}}>
            { props.children }
        </PageContext.Provider>
    );
}
