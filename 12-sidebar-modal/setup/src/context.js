import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSideBarOpen,setIsSideBarOpen]=useState(false)
    const [isModelOpen,setIsModelOpen]=useState(false)

    const openSidebar = () => {
        setIsSideBarOpen(true);
    }
    const closeSidebar = () => {
        setIsSideBarOpen(false);
    }
    const openModal = () => {
        setIsModelOpen(true);
    }
    const closeModal = () => {
        setIsModelOpen(false);
    }

    return <AppContext.Provider value={{
        isModelOpen,isSideBarOpen,openModal,openSidebar,closeModal,closeSidebar
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider}
