import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const themes = {
    dark:{
        bg: 'bg-black',
        text : 'text-white',
        navbar : 'bg-black'
    },
    light:{
        bg:'bg-white',
        text:'text-black',
        navbar :'bg-white'
    }
}

export function ThemeProvider({children}){

    const[isDark, setIsDark] = useState(true)
    const toggleTheme = ()=> setIsDark(prev => !prev)
    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(){
    return useContext(ThemeContext);
}

