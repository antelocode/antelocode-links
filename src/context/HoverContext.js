"use client";

import { createContext, useState, useContext } from "react";

const HoverContext = createContext()

const HoverProvider = ({children}) => {
    const [hovered, setHovered] = useState(false);

    const value = {
        hovered,
        setHovered
    }

    return <HoverContext.Provider value={value}>{children}</HoverContext.Provider>
}

export {HoverProvider, HoverContext}