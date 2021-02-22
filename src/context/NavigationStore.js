import React, {createContext, useContext, useState} from "react";
import {SCREENS} from "_utils/screens";

const NavigationContext = createContext({screen: SCREENS.LOGIN, setScreen: () => {}})

export const NavigationProvider = ({children}) => {
    const [screen, setScreen] = useState(SCREENS.LOGIN)

    return (<NavigationContext.Provider value={{screen,setScreen}}>
            {children}
        </NavigationContext.Provider>
        )
}

export const useNavigation = () => {
    const {screen, setScreen} = useContext(NavigationContext)
    return {screen, setScreen}
}