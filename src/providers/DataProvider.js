import React, { createContext } from 'react';
import { targetsData } from '../data/data';

export const DataContext = createContext();

export const DataProvider = props => {
    return(
        <DataContext.Provider value={ targetsData }>
            {props.children}
        </DataContext.Provider>
    );
}
