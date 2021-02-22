import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from '_utils/screens';
import HomeScreen from '_scenes/HomeScreen';
import {useNavigation} from "../context/NavigationStore";
import {CreatePost} from "_scenes/CreatePost";
import {RegistrationScreen} from "_scenes/RegistrationScreen";
import {LoginScreen} from "_scenes/LoginScreen";
import {useTheme} from "../context/ThemeStore";
import {EditTable} from "_scenes/EditTable";


const Stack = createStackNavigator();

const Navigation = () => {
    const {THEME_COLOR} = useTheme();
    return (
        <Stack.Navigator>
            <Stack.Screen
                style={{flex: 1, backgroundColor: THEME_COLOR.MAIN_BG}}
                name={SCREENS.HOME}
                component={HomeScreen} />
            <Stack.Screen
                style={{backgroundColor: "#000000"}}
                name={SCREENS.CREATE_POST}
                component={CreatePost} />
            <Stack.Screen
                style={{backgroundColor: THEME_COLOR.MAIN_BG}}
                name={SCREENS.REGISTER}
                component={RegistrationScreen} />
            <Stack.Screen
                style={{flex: 1, backgroundColor: THEME_COLOR.MAIN_BG}}
                name={SCREENS.LOGIN}
                component={LoginScreen} />
            <Stack.Screen
                style={{flex: 1, backgroundColor: THEME_COLOR.MAIN_BG}}
                name={SCREENS.TABLE}
                component={EditTable} />
        </Stack.Navigator>
    );
};

export default Navigation;
