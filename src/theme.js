import { createContext , useState } from "react";

export const DarkMode = createContext();

export function Theme ({children}) {
    const [darkMode , setDarkmode] = useState(0);
    const ToggleSwitch = () => {
        setDarkmode(!darkMode);
    }
    return (
        <DarkMode.Provider value={{darkMode , ToggleSwitch}}>
            {children}
        </DarkMode.Provider>
    )
}