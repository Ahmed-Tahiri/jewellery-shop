import { createContext, useContext, useState } from "react"

const NavContext = createContext();
export const useNav = () => useContext(NavContext);
export let NavProvider = ({ children }) => {

    const [navIsOpen, setNavIsOpen] = useState(false);
    return (<NavContext.Provider value={{ navIsOpen, setNavIsOpen }}>
        {children}
    </NavContext.Provider>);

}