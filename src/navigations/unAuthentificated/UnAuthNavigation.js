import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from "_utils/screens";
import {RegistrationScreen} from "_scenes/RegistrationScreen";
import {LoginScreen} from "_scenes/LoginScreen";

const Stack = createStackNavigator();

const UnAuthNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={SCREENS.REGISTER} component={RegistrationScreen}/>
            <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen}/>
        </Stack.Navigator>
    )
}

export default UnAuthNavigation;