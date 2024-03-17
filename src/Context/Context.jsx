import React, { createContext, useState, useContext } from "react";

export const ColorContext = createContext(0);

export const UseColorContext = () => {
    return useContext(ColorContext);
}

const ColorContextProvider = (props) => {
    const [handleColor, setHandleColor] = useState('black');

    return (
        <ColorContext.Provider value={{ handleColor, setHandleColor }}>
            {props.children}
        </ColorContext.Provider>
    );
}

export default ColorContextProvider;