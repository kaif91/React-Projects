import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({children}) =>{
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen,setIsSubmenuOpen] = useState(false);
    const [location,setLocation]= useState({})
    const [page,setPage] = useState({page:'',links:[]})
    
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openSubmenu = (text,cordinates) => {
        const page =sublinks.find((link)=>link.page === text);
        setPage(page)
        setLocation(cordinates)
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    
    return (<AppContext.Provider
    value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
        location,
        page
    }}>
        {children}
    </AppContext.Provider>)
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}