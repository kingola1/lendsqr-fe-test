import { createContext } from 'react'

export const SideBarContext = createContext({
    showSidebar: false,
    toggleSidebar: () => { }
});