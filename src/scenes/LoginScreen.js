import React from "react";
import {Text, View} from "react-native";
import {SCREENS} from "_utils/screens";
import {LoginFormView} from "_organisms/LoginFormView";

export const LoginScreen = ({navigation, route}) => {

    const handleRegister = () => {
        navigation.navigate(SCREENS.REGISTER);
    }

    return (
        <View>
            <LoginFormView handleRegister={handleRegister}/>
        </View>
    )
}