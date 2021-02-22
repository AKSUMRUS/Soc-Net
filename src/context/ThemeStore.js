import React, {useEffect, useState} from "react";
import {LIGHT_THEME} from "../styles/lightTheme";
import {DARK_THEME} from "../styles/darkTheme";

const ThemeContext = React.createContext({theme: 'DARK', setDark: () => {}, setLight: () => {}})

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('DARK');
    const setDark = () => {
        setTheme('DARK');
    }
    const setLight = () => {
        setTheme('LIGHT');
    }
    return <ThemeContext.Provider value={{theme, setDark, setLight}}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
    const {theme, setLight, setDark} = React.useContext(ThemeContext);
    return {
        theme,
        setLight,
        setDark,
        isLight: theme === 'LIGHT',
        isDark: theme === 'DARK',
        THEME_COLOR: theme === 'LIGHT' ? LIGHT_THEME : DARK_THEME
    }
}
